/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global describe:true, it:true, XT:true, XM:true, XV:true, process:true,
  module:true, require:true, exports:true */

(function () {
  "use strict";

  var assert = require("chai").assert;

  /**
  Sites typically describe physical production and storage facilities. work centers, item sites, and site locations belong to sites.
  @class
  @alias Site
  **/
  var spec = {
    // smoke is ran in the inventory site spec
    skipSmoke: true,
    recordType: "XM.Site",
    collectionType: "XM.SiteCollection",
    /**
      @member -
      @memberof Sites.prototype
      @description The site collection is cached.
    */
    cacheName: "XM.sites",
    listKind: "XV.SiteList",
    instanceOf: "XM.Document",
    /**
      @member -
      @memberof Sites.prototype
      @description Sites are lockable.
    */
    isLockable: true,
    /**
      @member -
      @memberof Sites.prototype
      @description The ID attribute is "code", which will not be automatically uppercased.
    */
    idAttribute: "code",
    enforceUpperKey: false,
    attributes: ["code", "address", "code", "comments", "contact", "description", "incoterms",
      "isActive", "notes", "siteType", "taxZone"],
    /**
      There should be no functionality for mult-site warehouses in Postbooks, thus, no privileges.
     */
    createHash: {
      code: "NewSite" + Math.random(),
      siteType: {name: "MFG"}
    },
    updatableField: "notes"
  };

  var additionalTests = function () {
    /**
      @member Setup
      @memberof Site.prototype
      @description Multiple Sites should not be allowed on Postbooks
    */
    it("Multiple Sites should not be allowed on Postbooks", function () {
      assert.equal(XM.sites.length, 1);
    });
  };

  exports.spec = spec;
  exports.additionalTests = additionalTests;
}());
