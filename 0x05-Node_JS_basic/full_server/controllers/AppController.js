/**
 * Contains the miscellaneous route handlers.
 * @author Samuel Boateng <https://github.com/adusei2023>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
