# Art of the Take

Counts the number of times a variation of the work **`take`** is said on [The Art of the Take](https://overcast.fm/itunes1437525066/the-art-of-the-take) podcast.

## Running Results

| Episode | Take Count |
| ------- | ---------- |
| 0001    | **244**    |
| 0002    | **231**    |

## How It Works

I run each episode through [Amazon Transcribe](https://docs.aws.amazon.com/transcribe/latest/dg/what-is-transcribe.html)

> Amazon Transcribe uses advanced machine learning technologies to recognize speech in audio files and transcribe them into text.

Transcripts are saved in the [`transcripts`](#) directory.

I then count how many times the word (or variation of) **`take`** appears.
