webpackJsonp([6],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(375)
__webpack_require__(374)

var Component = __webpack_require__(41)(
  /* script */
  __webpack_require__(537),
  /* template */
  __webpack_require__(341),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 131:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(131);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

exports.Common = {
	compareVersion(template, compare){
	    var tplEach = template.split(".");
		var compareEach = compare.split(".");
		var min = Math.min(tplEach.length, compareEach.length);
		for (var i = 0; i < min; i++) {
			var tem = parseInt(tplEach[i]);
			var com = parseInt(compareEach[i]);
			if (tem > com) {
				return 1;
			} else if (tem < com){
				return -1;
			}
		}
		if(tplEach.length == compareEach.length) {
			return 0;
		}
		return (tplEach.length > compareEach.length ? 1 : -1);
	}
}



/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".updateButton{margin-bottom:0;text-align:right;margin-top:10px}", ""]);

// exports


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".vue-datasource *{box-sizing:border-box;font-size:14px}.vue-datasource .panel{margin-bottom:22px;background-color:#fff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.05)}.vue-datasource .panel-default{border-color:#d3e0e9}.vue-datasource .panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.vue-datasource .panel-default>.panel-heading{height:56px;color:#333;background-color:#fff;border-color:#d3e0e9}.vue-datasource .pull-left{float:left!important}.vue-datasource .pull-right{float:right!important}.vue-datasource .form-group{margin-bottom:15px}.vue-datasource label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}.vue-datasource .form-control{display:block;width:100%;height:36px;color:#555;background-color:#fff;border:1px solid #ccd0d2;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.vue-datasource .btn,.vue-datasource .form-control{padding:6px 12px;font-size:14px;line-height:1.6;background-image:none}.vue-datasource .btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;border:1px solid transparent;white-space:nowrap;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-datasource .btn-primary{color:#fff;background-color:#3097d1;border-color:#2a88bd}.vue-datasource .table{width:100%;max-width:100%;margin-bottom:22px;border-collapse:collapse;border-spacing:0}.vue-datasource .table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.vue-datasource .table td,.vue-datasource .table th{padding:8px;line-height:1.6;vertical-align:top;border-top:1px solid #ddd}.vue-datasource .table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.vue-datasource .success td,.vue-datasource .success th{background-color:#dff0d8}.vue-datasource .pagination{display:inline-block;padding-left:0;margin:22px 0;border-radius:4px}.vue-datasource .pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.6;text-decoration:none;color:#3097d1;background-color:#fff;border:1px solid #ddd;margin-left:-1px}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;background-color:#fff;border-color:#ddd;cursor:not-allowed}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;background-color:#3097d1;border-color:#3097d1;cursor:default}.vue-datasource .pagination>li:first-child>a,.vue-datasource .pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.vue-datasource .text-center{text-align:center}@media (min-width:768px){.form-inline .form-group{display:inline-block}.form-inline .control-label,.form-inline .form-group{margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}}", ""]);

// exports


/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table"
  }, [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-menu"
  }), _vm._v("系统")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("开通企业信息")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%",
      "margin-top": "20px"
    },
    attrs: {
      "data": _vm.tableData,
      "border": "",
      "height": "600"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "ecName",
      "label": "EC客户名称",
      "width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "ecCode",
      "label": "EC客户编码",
      "width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "ecLevel",
      "label": "客户级别",
      "width": "135"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "proCode",
      "label": "产品编号",
      "width": "135"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "ecAddress",
      "label": "地址",
      "width": "145"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "ecPostCode",
      "label": "邮编",
      "width": "125"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "ecStatus",
      "label": "客户状态",
      "width": "130"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-tag', {
          attrs: {
            "type": scope.row.ecStatus === 1 ? 'success' : 'primary',
            "close-transition": ""
          }
        }, [_vm._v("\n                " + _vm._s(scope.row.ecStatus === 1 ? '正常' : '停机') + "\n            ")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "staffName",
      "label": "客户经理信息",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "keyName",
      "label": "客户关键人",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "isOpenStatus",
      "width": "130",
      "label": "开通状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-tag', {
          attrs: {
            "type": scope.row.isOpenStatus === 2 ? 'success' : 'primary',
            "close-transition": ""
          }
        }, [_vm._v("\n                " + _vm._s(scope.row.isOpenStatus === 2 ? '已开通' : '未开通') + "\n                ")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操    作",
      "width": "250"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small",
            "type": scope.row.isOpenStatus === 2 ? 'primary' : 'success'
          },
          on: {
            "click": function($event) {
              _vm.handleStatus(scope.$index, scope.row)
            }
          }
        }, [_vm._v(_vm._s(scope.row.isOpenStatus === 2 ? '取消开通' : '标记开通') + "\n          ")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": 'success'
          },
          on: {
            "click": function($event) {
              _vm.handleOrderDetail(scope.$index, scope.row)
            }
          }
        }, [_vm._v("查看订购信息")]), _vm._v(" "), _c('el-dialog', {
          attrs: {
            "title": "客户订购信息"
          },
          model: {
            value: (_vm.customerOrderDialog),
            callback: function($$v) {
              _vm.customerOrderDialog = $$v
            },
            expression: "customerOrderDialog"
          }
        }, [_c('el-table', {
          staticStyle: {
            "margin": "15px 0 15px 0"
          },
          attrs: {
            "data": _vm.customerOrders,
            "highlight-current-row": ""
          },
          on: {
            "current-change": _vm.enterpriseSelect
          }
        }, [_c('el-table-column', {
          attrs: {
            "property": "ecCode",
            "label": "EC客户编码",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "orderId",
            "label": "订单号",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "orderdTime",
            "label": "订购时间",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "proCode",
            "label": "产品编号",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "orderNum",
            "label": "订购数量",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "feeCode",
            "label": "资费编号",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "feeName",
            "label": "资费名称",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "unitPrice",
            "label": "资费单价",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "orderFee",
            "label": "订单费用",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "feePeriod",
            "label": "计费周期",
            "width": "150"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function(scope) {
              return [_vm._v("\n                    " + _vm._s(scope.row.feePeriod == '1' ? '单次' : scope.row.feePeriod == '2' ? '包月' : '包年') + "\n                  ")]
            }
          }])
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "validity",
            "label": "有效期(月)",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "orderNote",
            "label": "订单备注",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "feeName",
            "label": "资费名称",
            "width": "150"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "property": "unitPrice",
            "label": "资费单价",
            "width": "150"
          }
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "dialog-footer",
          attrs: {
            "slot": "footer"
          },
          slot: "footer"
        }, [_c('el-button', {
          on: {
            "click": function($event) {
              _vm.customerOrderDialog = false
            }
          }
        }, [_vm._v("取 消")])], 1)], 1)]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "layout": "prev, pager, next",
      "total": _vm.page.total,
      "page-size": _vm.page.size,
      "current-page": _vm.page.current
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("53b8a9a9", content, true);

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("596d50f4", content, true);

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_datasource__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_datasource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_datasource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_js_common__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_js_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_js_common__);






/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var self = this;
        return {
            tableData: [],
            editDialog: false,
            workFlowForm: [{ "fieldName": "edit1", "displayStatus": 1, "fieldKey": "edd1" }, { "fieldName": "edit2", "displayStatus": 0, "fieldKey": "edd2" }],
            editPopoverStatus: false,
            editIndex: -1,
            actions: [{
                text: 'Click',
                class: 'btn-primary',
                event: function event(e, row) {
                    self.$message('选中的行数： ' + row.row.id);
                }
            }],
            selectedEnterprise: [],
            page: {
                total: 0,
                current: 0,
                size: 1
            },
            query: {
                enterpriseName: "",
                versions: ""
            },
            upgradeParam: {
                version: "",
                enterprises: []
            },
            versions: [],
            upgradeVersions: [],
            maxVersion: "",
            selectedVersions: [],
            upgradeDialog: false,
            upgradeResultDialog: false,
            fullscreenLoading: false,
            customerOrderDialog: false,
            customerOrders: [],
            upgradeResponseParam: []
        };
    },
    components: {
        Datasource: __WEBPACK_IMPORTED_MODULE_2_vue_datasource___default.a
    },
    methods: {
        dateFormat: function dateFormat(row, column) {
            var date = row[column.property];
            if (date == undefined) {
                return "";
            }
            return moment(date).format("YYYY-MM-DD HH:mm:ss");
        },
        changePage: function changePage(values) {
            this.information.pagination.per_page = values.perpage;
            this.information.data = this.information.data;
        },
        onSearch: function onSearch(searchQuery) {
            this.query = searchQuery;
        },
        enterpriseSelect: function enterpriseSelect(val) {
            var that = this;
            that.selectedEnterprise = val;
            var temp = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(val));
            if (val.length <= 0) {
                that.upgradeParam.enterprises = [];
                that.maxVersion = "";
            } else {
                that.maxVersion = val[0].version;
            }
            temp.forEach(function (value, index) {
                var e = {};
                e.enterpriseNumber = value.enterpriseNumber;
                e.enterpriseName = value.enterpriseName;
                that.upgradeParam.enterprises[index] = e;
                if (__WEBPACK_IMPORTED_MODULE_3__static_js_common___default.a.Common.compareVersion(that.maxVersion, value.version) < -1) {
                    that.maxVersion = value.version;
                }
            });
        },
        handleCurrentChange: function handleCurrentChange(val) {
            var that = this;
            var param = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(that.query));
            param.pageNum = val;
            that.$http.get("/v1/customer/listCustomerInfos", { params: param }).then(function (res) {
                that.tableData = res.body.response_param;
                that.tableData.forEach(function (value, index) {
                    if (value.keyList[0].keyRole = "1") {
                        value.keyList[0].keyRole = "领导";
                    } else if (value.keyList[0].keyRole = "2") {
                        value.keyList[0].keyRole = "业务负责人";
                    } else if (value.keyList[0].keyRole = "3") {
                        value.keyList[0].keyRole = "联系人";
                    } else if (value.keyList[0].keyRole = "4") {
                        value.keyList[0].keyRole = "其他影响人";
                    }
                    value.staffName = "姓名：" + value.custList[0].staffName + "\n  电话：" + value.custList[0].staffPhone + "\n 手机：" + value.custList[0].staffMobile;
                    value.keyName = "角色：" + value.keyList[0].keyRole + "\n  姓名：" + value.keyList[0].keyName + "\n 手机：" + value.keyList[0].keyPhone + "\n  邮箱：" + value.keyList[0].keyEmail;
                    if (value.ecLevel = "01") {
                        value.ecLevel = "A1";
                    } else if (value.ecLevel = "02") {
                        value.ecLevel = "A2";
                    } else if (value.ecLevel = "03") {
                        value.ecLevel = "B1";
                    } else if (value.ecLevel = "04") {
                        value.ecLevel = "B2";
                    } else if (value.ecLevel = "05") {
                        value.ecLevel = "C";
                    } else if (value.ecLevel = "06") {
                        value.ecLevel = "D";
                    }
                });
            }, function (error) {
                that.errorFunc(error.body.error_msg);
            });
        },
        getTotal: function getTotal() {
            var that = this;
            that.page.current = 0;
            var param = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(that.query));
            that.$http.get("/v1/customer/getTotal", { params: param }).then(function (res) {
                that.page.total = res.body.response_param.total;
                that.page.size = res.body.response_param.pageSize;
                that.page.current = 1;
            }, function (error) {
                that.errorFunc(error.body.error_msg);
            });
        },
        handleOrderDetail: function handleOrderDetail(index, row) {
            var that = this;
            var val = { id: row.id };
            that.$http.get("/v1/customer/listCusOrdersDetails", { params: val }).then(function (res) {
                that.customerOrders = res.body.response_param;
                that.customerOrderDialog = true;
                that.tableData.forEach(function (value, index) {});
            }, function (error) {
                that.errorFunc(error.body.error_msg);
            });
        },
        handleStatus: function handleStatus(index, row) {
            var _this = this;

            this.$confirm('此操作将标记该企业状态为' + (row.isOpenStatus === 2 ? '【未开通】' : '【已开通】') + ', 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                var param = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(row.id));
                _this.$http.put('/v1/customer/updateOpenStatus', { params: param }).then(function (res) {
                    console.log(res.body.data);
                    if (res.status === 200) {
                        this.$message({ type: 'success', message: '状态更新成功！' });
                        row.isOpenStatus = row.isOpenStatus === 2 ? 1 : 2;
                    }
                }, function () {
                    console.log('请求失败处理');
                });
            }).catch(function () {
                _this.$message({
                    type: 'info',
                    message: '已取消！'
                });
            });
        },
        listAllVersions: function listAllVersions() {
            var that = this;
            that.$http.get("/v1/enterprise/listVersions").then(function (res) {
                var response = res.body.response_param;
                if (response != null) {
                    that.versions = response;
                }
            }, function (error) {
                that.errorFunc(error.body.error_msg);
            });
        },
        versionSelect: function versionSelect(val) {
            var that = this;
            var vs = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(that.selectedVersions));
            that.query.versions = vs.join();
        },
        upgradeEnterprise: function upgradeEnterprise() {
            var that = this;
            that.fullscreenLoading = true;
            var param = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(that.upgradeParam));
            that.$http.put("/v1/enterprise/upgrade", param).then(function (res) {
                that.fullscreenLoading = false;
                that.upgradeResultDialog = true;
                that.upgradeResponseParam = res.body.response_param;
            }, function (error) {
                that.fullscreenLoading = false;
                that.errorFunc(error.body.error_msg);
            });
        },
        handleUpgradeClick: function handleUpgradeClick() {
            var that = this;
            console.log("selectedVersions ===> ", that.selectedEnterprise);
            if (that.selectedEnterprise.length <= 0) {
                that.warnFunc("请选择需要升级的企业！");
            } else {
                that.upgradeDialog = true;
                var param = { version: that.maxVersion };
                that.$http.get("/v1/enterprise/listUsefulVersions", { params: param }).then(function (res) {
                    that.upgradeVersions = res.body.response_param;
                });
            }
        },
        getMaxVersion: function getMaxVersion(versions) {
            if (versions == null || versions.length <= 0) {
                return null;
            }
            var v = versions[0];
            for (var i = 0; i < versions.length; i++) {
                if (compareVersion(v, versions[i]) < 0) {
                    v = versions[i];
                }
            }
            return v;
        },
        errorFunc: function errorFunc(msg) {
            this.$message.error(msg);
        },
        warnFunc: function warnFunc(msg) {
            var that = this;
            that.$message({
                message: msg,
                type: 'warning'
            });
        },
        successFunc: function successFunc(msg) {
            var that = this;
            that.$message({
                message: msg,
                type: 'success'
            });
        }
    },
    customerOrderDialog: true,
    customerOrders: [{ enterpriseNumber: 10120, enterpriseName: "newly" }, { enterpriseNumber: 10120, enterpriseName: "newly" }],
    computed: {
        getData: function getData() {
            var self = this;
            return self.information.data.filter(function (d) {
                if (d.name.indexOf(self.query) > -1) {
                    return d;
                }
            });
        }
    },
    mounted: function mounted() {
        var that = this;
        that.listAllVersions();
        that.getTotal();
    }
});

/***/ })

});