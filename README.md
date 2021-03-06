# Art of the Take

Counts the number of times a variation of the word **`take`** is said on [The Art of the Take](https://overcast.fm/itunes1437525066/the-art-of-the-take) podcast.

## Running Results

| Episode | Number of times a variation of the word **`take`** is said |
| ------- | ---------------------------------------------------------- |
| 0001    | 244                                                        |
| 0002    | 231                                                        |
| 0003    | 240                                                        |
| 0004    | 214                                                        |
| Average | **232 / episode**                                          |

## How It Works

I run each episode through [Amazon Transcribe](https://docs.aws.amazon.com/transcribe/latest/dg/what-is-transcribe.html)

> Amazon Transcribe uses advanced machine learning technologies to recognize speech in audio files and transcribe them into text.

Transcripts are saved in the [`transcripts`](https://github.com/MattMorgis/art-of-the-take/tree/master/transcripts) directory.

It then counts how many times the word (or variation of) **`take`** appears.
