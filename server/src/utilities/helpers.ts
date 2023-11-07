import fetch from "../../node_modules/node-fetch";

export async function urlToBlob(url: string): Promise<Blob> {
    try {
        if (url.startsWith('blob:')) throw new Error(url + "\tAlready a blob")

        const response = await fetch(`${url}`)

        if (response.status >= 200 && response.status < 300) {
            const blob = await response.blob()
            return blob as Blob
        } else {
            console.error(`Error code ${response.status}. Couldn't get blob`);
            throw new Error('Failed to retrieve the image');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}