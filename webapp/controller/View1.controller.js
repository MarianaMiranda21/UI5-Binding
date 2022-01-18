sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("gutendex.com.controller.View1", {
            onInit: function () {

                debugger

                this.oModel = new sap.ui.model.json.JSONModel()
                this.getView().setModel(this.oModel, "modelData")

                this.oMode2 = new sap.ui.model.json.JSONModel()
                this.getView().setModel(this.oMode2, "modelControl")
            },

            onSearch: function (oControlEvent) {
                debugger
                var sAPI = "https://gutendex.com/books"
                var sid = this.oMode2.getProperty("/searchValue")
                this.oModel.loadData(sAPI + "?ids=" + sid)

            }

        });
    });
