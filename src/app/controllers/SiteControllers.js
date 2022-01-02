


class SiteControllers {
  async home(req, res) {
    return await res.status(200).render('home')
  }
  
}

module.exports = new SiteControllers()