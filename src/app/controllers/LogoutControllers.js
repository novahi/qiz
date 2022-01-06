
class LogoutControllers {
  async get(req, res) {
     await res.clearCookie("accessToken")
     return res.status(200).redirect("/login")
  }
}
module.exports = new LogoutControllers()