import { streamServer } from "./stream";

type StreamUser = {
  id: string;
  name: string;
  image?: string | null;
};

export async function upsertStreamUser(user: StreamUser) {
    try {
    console.log("Creating Stream User:", user);

    const response = await streamServer.upsertUser({
      id: user.id,
      name: user.name,
      image: user.image?.toString() || undefined,
    });

    console.log("Stream Response:", response);
  } catch (error) {
    console.error("STREAM ERROR:", error);
  }
}