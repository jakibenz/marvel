class MarvelAPI {

  //Format for MARVEL API fetching of data
  static getCharacters(origOptions = {}) {

    const defaultOptions = { page: 0, count: 20, name: '', nameStartsWith: '' }
    const options = Object.assign(defaultOptions, origOptions)

    const URI = '/v1/public/characters'
    const timeStamp = '1565922410'
    const hash = '1492df65a88ef98a1a279719fe509f72'
    const apiKey = '6a038473ffd6407750a2ea27115f7e7c'
    const baseUrl = `${window.location.protocol || 'http'}//gateway.marvel.com:80`

    let params = `?apikey=${apiKey}&ts=${timeStamp}&hash=${hash}`

    if (options.name) {
      params = params.concat(`&name=${options.name}`)
    }
    if (options.nameStartsWith) {
      params = params.concat(`&nameStartsWith=${options.nameStartsWith}`)
    }
    const url = `${baseUrl}${URI}${params}`


    return fetch(url)
  }

  static getComicsByCharacter(characterId) {

    const URI = `/v1/public/characters/${characterId}/comics`
    const timeStamp = '1565922410'
    const hash = '1492df65a88ef98a1a279719fe509f72'
    const apiKey = '6a038473ffd6407750a2ea27115f7e7c'
    const baseUrl = `${window.location.protocol || 'http'}//gateway.marvel.com:80`

    const params = `?apikey=${apiKey}&ts=${timeStamp}&hash=${hash}&limit=25`
    const url = `${baseUrl}${URI}${params}`

    return fetch(url)
  }
  static getSeriesByCharacter(characterId) {

    const URI = `/v1/public/characters/${characterId}/series`
    const timeStamp = '1565922410'
    const hash = '1492df65a88ef98a1a279719fe509f72'
    const apiKey = '6a038473ffd6407750a2ea27115f7e7c'
    const baseUrl = `${window.location.protocol || 'http'}//gateway.marvel.com:80`

    const params = `?apikey=${apiKey}&ts=${timeStamp}&hash=${hash}&limit=25`
    const url = `${baseUrl}${URI}${params}`

    return fetch(url)
  }
  static getStoriesByCharacter(characterId) {

    const URI = `/v1/public/characters/${characterId}/stories`
    const timeStamp = '1565922410'
    const hash = '1492df65a88ef98a1a279719fe509f72'
    const apiKey = '6a038473ffd6407750a2ea27115f7e7c'
    const baseUrl = `${window.location.protocol || 'http'}//gateway.marvel.com:80`

    const params = `?apikey=${apiKey}&ts=${timeStamp}&hash=${hash}&limit=25`
    const url = `${baseUrl}${URI}${params}`

    return fetch(url)
  }
}

export default MarvelAPI