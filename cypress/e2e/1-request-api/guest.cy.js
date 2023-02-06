/// <reference types="cypress" />

context("Login By Guest", () => {
    // const endpoint = "https://6ef6-143-92-127-33.ap.ngrok.io/api/v1/";
    const endpoint = "https://2661-103-75-52-42.ngrok.io/api/v1/";
    const expectedTime = 10000;
    let token = "";
    let productID = "8d72af19-2f98-4685-933b-5bf4b56f241e";
  
    it("product", () => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request("GET", endpoint + "product").then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
      });
    });
  
    it("product with keyword search", () => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request("GET", endpoint + "product?search=shirt").then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
      });
    });
  
    it("product with category search", () => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request("GET", endpoint + "product?category=elektronik").then(
        (response) => {
          const elapsed = Date.now() - startTime; // calculate elapsed time
          expect(response.status).to.equal(200);
          expect(elapsed).to.be.lessThan(expectedTime);
        }
      );
    });
  
    it("product with category and keyword search", () => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request(
        "GET",
        endpoint + "product?category=elektronik&search=shirt"
      ).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
      });
    });
  
    it("product with all search", () => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request(
        "GET",
        endpoint +
          "product?search=&category=&limit=30&page=1&sort_by=&sort=&min_price=0&max_price=1000000000&min_rating=-1&max_rating=5&shop_id=&province_ids="
      ).then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
      });
    });
  
    it("product recommended", () => {
      let startTime;
  
      cy.clock(); // starts the cypress clock
      cy.then(() => {
        startTime = Date.now();
      }); // record the start time
  
      cy.request("GET", endpoint + "product/recommended").then((response) => {
        const elapsed = Date.now() - startTime; // calculate elapsed time
        expect(response.status).to.equal(200);
        expect(elapsed).to.be.lessThan(expectedTime);
      });
    });
  
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
  