import axios from "axios";
import { Buffer } from "buffer";
import { ContactFormType } from "../constants/types";

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const FORM_ENDPOINT = "https://formsubmit.co/rajioladeji2@gmail.com";

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      TOKEN_ENDPOINT,
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
      {
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return { data: response.data, error: false };
  } catch (error) {
    console.log(error);
    return { error: true, data: null };
  }
};

export const getNowPlaying = async (signal: AbortSignal) => {
  const { data, error } = await getAccessToken();
  if (error) return;
  try {
    const { access_token } = data;
    const response = await axios(NOW_PLAYING_ENDPOINT, {
      signal,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return {
      title: response.data.item.name,
      artist: response.data.item.artists[0].name,
    };
  } catch (error) {
    console.log(error);
  }
};

export const formSubmit = async (formData: ContactFormType) => {
  try {
    const response = await axios.post(
      FORM_ENDPOINT,
      { ...formData, _captcha: "false" },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blob = new Blob([response.data], { type: "text/html" });

    const url = URL.createObjectURL(blob);

    window.open(url, "_blank");

    return { data: response.data, error: false };
  } catch (error) {
    console.log(error);
    return { error: true, data: null };
  }
};
