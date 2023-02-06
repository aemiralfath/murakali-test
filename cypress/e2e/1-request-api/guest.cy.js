/// <reference types="cypress" />

context("Login By Guest", () => {
    const endpoint = "https://be.murakali.store/api/v1/";
    const expectedTime = 400;
    let productID = "951d7435-2173-4ce1-90b2-276541cf52d2";
    let sellerID = "e8854443-c2c7-488e-93d5-b9d93708b8a3"
  
    it("product detail", () => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request("GET", endpoint + "product/" + productID).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
      });
    });
  
    it("product picture detail", () => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request("GET", endpoint + "product/" + productID + "/picture").then(
        (response) => {
          const elapsed = Date.now() - startTime; // calculate elapsed time
          expect(response.status).to.equal(200);
          expect(elapsed).to.be.lessThan(expectedTime);
        }
      );
    });
  
    it("get all category", () => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request("GET", endpoint + "product/category").then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
      });
    });
  
    it("get all banner", () => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request("GET", endpoint + "product/banner").then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
      });
    });
  
    it('location - province',() => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request({
        method: 'GET',
        url: endpoint + 'location/province',
      }).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property('data');
      }, (error) => {
        expect(error.status).to.equal(401);
      });
  
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request({
        method: 'GET',
        url: endpoint + 'location/province',
      }).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property('data');
      }, (error) => {
        expect(error.status).to.equal(401);
      });
    })
  
    it('location - city',() => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request({
        method: 'GET',
        url: endpoint + 'location/province/city?province_id=1',
      }).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property('data');
      }, (error) => {
        expect(error.status).to.equal(401);
      });
  
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request({
        method: 'GET',
        url: endpoint + 'location/province/city?province_id=1',
      }).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property('data');
      }, (error) => {
        expect(error.status).to.equal(401);
      });
    })
  
    it('location - subdistrict',() => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request({
        method: 'GET',
        url: endpoint + 'location/province/city/subdistrict?province=Bali&city=Badung',
      }).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property('data');
      }, (error) => {
        expect(error.status).to.equal(401);
      });
  
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request({
        method: 'GET',
        url: endpoint + 'location/province/city/subdistrict?province=Bali&city=Badung',
      }).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property('data');
      }, (error) => {
        expect(error.status).to.equal(401);
      });
    })
  
    it('location - urban',() => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request({
        method: 'GET',
        url: endpoint + 'location/province/city/subdistrict/urban?province=Bali&city=Badung&subdistrict=Kuta',
      }).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property('data');
      }, (error) => {
        expect(error.status).to.equal(401);
      });
  
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request({
        method: 'GET',
        url: endpoint + 'location/province/city/subdistrict/urban?province=Bali&city=Badung&subdistrict=Kuta',
      }).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property('data');
      }, (error) => {
        expect(error.status).to.equal(401);
      });
    })
  
    it('Seller - get seller',() => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request({
        method: 'GET',
        url: endpoint + 'seller/' + sellerID,
      }).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property('data');
      }, (error) => {
        expect(error.status).to.equal(401);
      });
  
    });
  
    it('Seller - category seller ',() => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request({
        method: 'GET',
        url: endpoint + 'seller/' + sellerID + '/category',
      }).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
        expect(response.body).to.have.property('data');
      }, (error) => {
        expect(error.status).to.equal(401);
      });
    });
  
  });
  