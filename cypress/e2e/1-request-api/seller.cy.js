/// <reference types="cypress" />

context("Login By Seller", () => {
  // const endpoint = "https://6ef6-143-92-127-33.ap.ngrok.io/api/v1/";
  const endpoint = "https://2661-103-75-52-42.ngrok.io/api/v1/";
  const expectedTime = 10000;
  let token = "";
  let productID = "8d72af19-2f98-4685-933b-5bf4b56f241e";
  let orderID = "8d72af19-2f98-4685-933b-5bf4b56f241e";

  it("login by seller", () => {
    cy.request({
      method: "POST",
      url: endpoint + "auth/login",
      body: {
        email: "seller1@gmail.com",
        password: "Tested9*",
      },
    }).then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("data");
        token = response.body.data.access_token;
      },
      (error) => {
        expect(error.status).to.equal(401);
      }
    );
  });

  it("Seller - get order", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "seller/order",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(
      (response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property("data");
        orderID = response.body.data.rows[0].order_id;
      },
      (error) => {
        expect(error.status).to.equal(401);
      }
    );
  });

  it("Seller - get order detail", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "seller/order/" + orderID,
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(
      (response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property("data");
      },
      (error) => {
        expect(error.status).to.equal(401);
      }
    );
  });

  it("Seller - get voucher", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "seller/voucher",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(
      (response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property("data");
      },
      (error) => {
        expect(error.status).to.equal(401);
      }
    );
  });

  it("Seller - get promotion", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "seller/promotion",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(
      (response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property("data");
      },
      (error) => {
        expect(error.status).to.equal(401);
      }
    );
  });
});
