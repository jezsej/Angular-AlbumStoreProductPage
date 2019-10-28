export interface Album{
  id: string
  artist: string
  album: album


}

interface album {
  name: string
  releaseDate: string
  coverImage: string
  tracks: {trackNumber:number, trackName:string, trackLength:string, trackPrice:number}[]

}


