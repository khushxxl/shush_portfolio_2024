const SPOTIFY_CLIENT_ID: string = `06fefed632a34dfdb1283435103d688c`;
const redirectUri: string = "http://localhost:3004";

const access_token =
  "BQD3gOURMsNif6_Xi87IzLr9Lr4qn-_1eGGMG5BtpY0KCGh7nw0LUhgDoe57B9v6SD4WneVMRYuHm5-aHRLx3QRc8WxmetXq2I08xkxpvlfhyVxsiJWqFOfuwZhEtBySne6XscGoO2wvzId945Wx-Z9e-Z1l03RUfbz0fxYhDt9hPaCUX3IVjF-YsuJ_EMtZ4hwh5zwVKw_f08-wDqqhaIiXborXxLSYpetrlzApjOZPf2Sbjhl9_-oplgpI";
const codeVerifierCode =
  "bkN2xpGqUz4OjajoJi0EuZqNUt7s9OiD9PgJmTIHJAFyIScHJvt2KopoWhnE1VpqTRd8BLBw9YJjfcYmMLbNYe2GUqwipAkxa1tko3B67z5wtCesJe0VFsZoH98nMapL";

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function generateRandomString(length: number): string {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier: string): Promise<string> {
  function base64encode(string: Uint8Array): string {
    return btoa(String.fromCharCode.apply(null, Array.from(string)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  return base64encode(new Uint8Array(digest));
}

// const codeVerifier: string = generateRandomString(128);

let urlParams = new URLSearchParams();

if (typeof window !== "undefined") {
  urlParams = new URLSearchParams(window.location.search);
}

export const authorize = async () => {
  generateCodeChallenge(codeVerifierCode).then((codeChallenge) => {
    const state: string = generateRandomString(16);
    const scope: string =
      "user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state user-read-playback-position user-top-read user-read-recently-played app-remote-control playlist-read-private";

    sessionStorage.setItem("code_verifier", codeVerifierCode);

    const args = new URLSearchParams({
      response_type: "code",
      client_id: SPOTIFY_CLIENT_ID,
      scope: scope,
      redirect_uri: redirectUri,
      state: state,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
    });

    window.location.href = "https://accounts.spotify.com/authorize?" + args;
  });
};

export const getToken = async (code: string | null) => {
  // const codeVerifier = sessionStorage.getItem("code_verifier");

  const body = new URLSearchParams({
    grant_type: "authorization_code" || "",
    code: code || "",
    redirect_uri: redirectUri || "",
    client_id: SPOTIFY_CLIENT_ID || "",
    code_verifier: codeVerifierCode || "",
  });
  try {
    await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((data: { access_token: string }) => {
        sessionStorage.setItem("access_token", data.access_token);
      });
  } catch (error) {
    window.location.href = "/";
  }
};

export const refreshSpotifyToken = async (refresh_token: string) => {
  const body = new URLSearchParams({
    grant_type: "refresh_token" || "",
    refresh_token: refresh_token,
    client_id: SPOTIFY_CLIENT_ID || "",
  });
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentlyPlaying = async () => {
  const token = sessionStorage.getItem("access_token");
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/me/player/currently-playing`,
      {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      }
    );

    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getRecentlyPlayedTracks = async () => {
  const token = sessionStorage.getItem("access_token");
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/me/player/recently-played?limit=3`,
      {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      }
    );

    return response.json();
  } catch (err) {
    console.log(err);
  }
};
