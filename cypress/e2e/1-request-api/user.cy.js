/// <reference types="cypress" />

context("Login By User", () => {
  // const endpoint = "https://6ef6-143-92-127-33.ap.ngrok.io/api/v1/";
  const endpoint = "https://2661-103-75-52-42.ngrok.io/api/v1/";
  const expectedTime = 400;
  let token = "";

  it("login", () => {
    cy.request({
      method: "POST",
      url: endpoint + "auth/login",
      body: {
        email: "user@gmail.com",
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

  it("get user profile", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "user/profile",
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

  it("get user address", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "user/address",
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

  it("get sealabs pay", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "user/sealab-pay",
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

  it("get wallet", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "user/wallet",
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

  it("get wallet history", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "user/wallet/history",
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

  it("get order user", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "user/order",
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

  it("get transaction user", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "user/transaction?limit=10&page=1",
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

  it("get favorite product user", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "product/favorite",
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

  it("get cart product user", () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "cart/items",
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
