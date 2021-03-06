'use strict';

const Controller = require('egg').Controller;

/**
 * @swagger
 * tags:
 *   name: pet
 *   description: Everything about your Pets
 *   externalDocs:
 *     description: "Find out more"
 *     url: "http://swagger.io"
 */
class PetController extends Controller {
  /**
   * @swagger
   * /pet:
   *   post:
   *     tags:
   *     - "pet"
   *     summary: "Add a new pet to the store"
   *     description: ""
   *     operationId: "addPet"
   *     consumes:
   *     - "application/json"
   *     - "application/xml"
   *     produces:
   *     - "application/xml"
   *     - "application/json"
   *     parameters:
   *     - in: "body"
   *       name: "body"
   *       description: "Pet object that needs to be added to the store"
   *       required: true
   *       schema:
   *         $ref: "#/definitions/Pet"
   *     responses:
   *       "405":
   *         description: "Invalid input"
   *     security:
   *     - petstore_auth:
   *       - "write:pets"
   *       - "read:pets"
   */
  async addPet() {
    // ignore
  }

  /**
   * @swagger
   * /pet:
   *     put:
   *       tags:
   *       - "pet"
   *       summary: "Update an existing pet"
   *       description: ""
   *       operationId: "updatePet"
   *       consumes:
   *       - "application/json"
   *       - "application/xml"
   *       produces:
   *       - "application/xml"
   *       - "application/json"
   *       parameters:
   *       - in: "body"
   *         name: "body"
   *         description: "Pet object that needs to be added to the store"
   *         required: true
   *         schema:
   *           $ref: "#/definitions/Pet"
   *       responses:
   *         "400":
   *           description: "Invalid ID supplied"
   *         "404":
   *           description: "Pet not found"
   *         "405":
   *           description: "Validation exception"
   *       security:
   *       - petstore_auth:
   *         - "write:pets"
   *         - "read:pets"
   */
  async updatePet() {
    // ignore
  }
}

module.exports = PetController;
