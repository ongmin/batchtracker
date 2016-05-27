let mongoose = require('mongoose');
let BatchRecord = require('./models/batchRecord.js');

var initial = [
  {
  skuNum: "7860",
  batchNumber: "21686A",
  productName: "Clinical Ultra-Rich Moisturizer",
    expiryDate: {
      month: 12,
      year: 2018
    }
  },
  {
  skuNum: "7861",
  batchNumber: "21686A",
  productName: "Clinical Ultra-Rich Soothing Body Butter",
    expiryDate: {
      month: 12,
      year: 2018
    }
  },

    {
      "productName": "Skin Recovery Advanced Kit",
      "skuNum": "7862",
      "batchNumber": "21686A",
        "expiryDate": {
          "month": 12,
          "year": 2017
        }
      },
      {
        "productName": "Skin Recovery Essential Kit",
        "skuNum": "7863",
        "batchNumber": "34432B",
          "expiryDate": {
            "month": 8,
            "year": 2018
          }
        },
        {
          "productName": "Earth Sourced Kit",
          "skuNum": "7864",
          "batchNumber": "34432B",
            "expiryDate": {
              "month": 6,
              "year": 2018
            }
          },
          {
            "productName": "Resist Super Kit for Wrinkles + Sun Damage",
            "skuNum": "7865",
            "batchNumber": "34432B",
              "expiryDate": {
                "month": 8,
                "year": 2018
              }
            },
            {
              "productName": "Calm Redness Relief Cleanser - Normal to Dry",
              "skuNum": "7866",
              "batchNumber": "34432B",
                "expiryDate": {
                  "month": 9,
                  "year": 2018
                }
              },
              {
                "productName": "Moisture Boost One Step Face Cleanser",
                "skuNum": "7867",
                "batchNumber": "34432B",
                  "expiryDate": {
                    "month": 9,
                    "year": 2018
                  }
                },
                {
                  "productName": "Resist C15 Super Booster",
                  "skuNum": "7868",
                  "batchNumber": "34432B",
                    "expiryDate": {
                      "month": 9,
                      "year": 2018
                    }
                  },
                  {
                    "productName": "Resist BHA 9",
                    "skuNum": "7869",
                    "batchNumber": "34432B",
                      "expiryDate": {
                        "month": 5,
                        "year": 2017
                      }
                    },
                    {
                      "productName": "Resist Anti-Aging Eye Cream",
                      "skuNum": "7870",
                      "batchNumber": "34432B",
                        "expiryDate": {
                          "month": 9,
                          "year": 2017
                        }
                      },
                      {
                        "productName": "Resist Vitamin C Spot Treatment",
                        "skuNum": "7871",
                        "batchNumber": "34432B",
                          "expiryDate": {
                            "month": 9,
                            "year": 2017
                          }
                        },
                        {
                          "productName": "Resist Body Oil Spray",
                          "skuNum": "7872",
                          "batchNumber": "34432B",
                            "expiryDate": {
                              "month": 9,
                              "year": 2018
                            }
                          }]

initial.forEach(function(newBatchRecord) {
  console.log(newBatchRecord)
  new BatchRecord(newBatchRecord).save(err => {
    if (err) return console.error(err)
    console.log('batch record created!')
    console.log(JSON.stringify(newBatchRecord))
  })
})
