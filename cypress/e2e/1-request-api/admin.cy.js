/// <reference types="cypress" />

context("Login By Admin", () => {
  const endpoint = "https://be.murakali.store/api/v1/";
  const expectedTime = 400;
  let token = "";

  it("login by admin", () => {
    cy.request({
      method: "POST",
      url: endpoint + "auth/login",
      body: {
        email: "admin@gmail.com",
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

  it('Admin - get banner', () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "admin/banner",
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

  it('Admin - get category', () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }
    ); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "admin/category",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(
      (response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property("data");
      }
    );
  });

  it('Admin - get refund', () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }
    ); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "admin/refund?page=1&sort=desc",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(
      (response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property("data");
      }
    );
  });

  it('Admin - get voucher', () => {
    let startTime;

    cy.clock(); // starts the cypress clock
    cy.then(() => {
      startTime = Date.now();
    }
    ); // record the start time

    cy.request({
      method: "GET",
      url: endpoint + "admin/voucher",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(
      (response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property("data");
      }
    );
  });



});
