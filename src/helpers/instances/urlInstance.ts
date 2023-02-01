class URLInstance {
  url: URL

  constructor() {
    this.url = new URL(window.location.href)
  }

  updateURL() {
    this.url = new URL(window.location.href)
  }

  getUrl() {
    this.updateURL()

    return this.url
  }
}

export const urlInstance = new URLInstance()
