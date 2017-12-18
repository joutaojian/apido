webpackJsonp([7],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(362)
__webpack_require__(361)

var Component = __webpack_require__(41)(
  /* script */
  __webpack_require__(532),
  /* template */
  __webpack_require__(332),
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

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".updateButton{margin-bottom:0;text-align:right;margin-top:10px}", ""]);

// exports


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".vue-datasource *{box-sizing:border-box;font-size:14px}.vue-datasource .panel{margin-bottom:22px;background-color:#fff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.05)}.vue-datasource .panel-default{border-color:#d3e0e9}.vue-datasource .panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.vue-datasource .panel-default>.panel-heading{height:56px;color:#333;background-color:#fff;border-color:#d3e0e9}.vue-datasource .pull-left{float:left!important}.vue-datasource .pull-right{float:right!important}.vue-datasource .form-group{margin-bottom:15px}.vue-datasource label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}.vue-datasource .form-control{display:block;width:100%;height:36px;color:#555;background-color:#fff;border:1px solid #ccd0d2;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.vue-datasource .btn,.vue-datasource .form-control{padding:6px 12px;font-size:14px;line-height:1.6;background-image:none}.vue-datasource .btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;border:1px solid transparent;white-space:nowrap;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-datasource .btn-primary{color:#fff;background-color:#3097d1;border-color:#2a88bd}.vue-datasource .table{width:100%;max-width:100%;margin-bottom:22px;border-collapse:collapse;border-spacing:0}.vue-datasource .table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.vue-datasource .table td,.vue-datasource .table th{padding:8px;line-height:1.6;vertical-align:top;border-top:1px solid #ddd}.vue-datasource .table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.vue-datasource .success td,.vue-datasource .success th{background-color:#dff0d8}.vue-datasource .pagination{display:inline-block;padding-left:0;margin:22px 0;border-radius:4px}.vue-datasource .pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.6;text-decoration:none;color:#3097d1;background-color:#fff;border:1px solid #ddd;margin-left:-1px}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;background-color:#fff;border-color:#ddd;cursor:not-allowed}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;background-color:#3097d1;border-color:#3097d1;cursor:default}.vue-datasource .pagination>li:first-child>a,.vue-datasource .pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.vue-datasource .text-center{text-align:center}@media (min-width:768px){.form-inline .form-group{display:inline-block}.form-inline .control-label,.form-inline .form-group{margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}}", ""]);

// exports


/***/ }),

/***/ 332:
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
  }), _vm._v("系统")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("执行脚本")])], 1)], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('div', {
    staticClass: "block"
  }, [_c('span', {
    staticClass: "wrapper"
  }, [_c('el-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm.handleUpgradeClick
    }
  }, [_vm._v("执行脚本")])], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "版本选择",
      "size": "tiny"
    },
    model: {
      value: (_vm.upgradeDialog),
      callback: function($$v) {
        _vm.upgradeDialog = $$v
      },
      expression: "upgradeDialog"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "autosize": {
        minRows: 2,
        maxRows: 4
      },
      "placeholder": "请输入企业E号，用‘,’分隔"
    },
    model: {
      value: (_vm.enterpriseNumbers),
      callback: function($$v) {
        _vm.enterpriseNumbers = $$v
      },
      expression: "enterpriseNumbers"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.cancleExec
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "loading",
      rawName: "v-loading.fullscreen.lock",
      value: (_vm.fullscreenLoading),
      expression: "fullscreenLoading",
      modifiers: {
        "fullscreen": true,
        "lock": true
      }
    }],
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.upgradeEnterprise
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)])], 1), _vm._v(" "), _c('el-table', {
    ref: "singleTable",
    staticStyle: {
      "width": "100%",
      "margin-top": "20px"
    },
    attrs: {
      "data": _vm.tableData,
      "border": "",
      "height": "600",
      "highlight-current-row": ""
    },
    on: {
      "current-change": _vm.scriptSelect
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "scriptName",
      "label": "脚本名称"
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "升级结果"
    },
    model: {
      value: (_vm.upgradeResultDialog),
      callback: function($$v) {
        _vm.upgradeResultDialog = $$v
      },
      expression: "upgradeResultDialog"
    }
  }, [_c('el-table', {
    attrs: {
      "data": _vm.upgradeResponseParam
    }
  }, [_c('el-table-column', {
    attrs: {
      "property": "enterpriseNumber",
      "label": "企业E号",
      "width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "property": "description",
      "label": "升级描述"
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(282);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("165690d8", content, true);

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(283);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("4cf039f4", content, true);

/***/ }),

/***/ 532:
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
            editPopoverStatus: false,
            editIndex: -1,
            actions: [{
                text: 'Click',
                class: 'btn-primary',
                event: function event(e, row) {
                    self.$message('选中的行数： ' + row.row.id);
                }
            }],
            submitParam: {
                scriptName: "",
                enterpriseNumbers: []
            },
            enterpriseNumbers: "",
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
            upgradeResponseParam: []
        };
    },
    components: {
        Datasource: __WEBPACK_IMPORTED_MODULE_2_vue_datasource___default.a
    },
    methods: {
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
            that.$http.get("/v1/enterprise/listEnterprises", { params: param }).then(function (res) {
                that.tableData = res.body.response_param;
            }, function (error) {
                that.errorFunc(error.body.error_msg);
            });
        },
        getTotal: function getTotal() {
            var that = this;
            that.page.current = 0;
            var param = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(that.query));
            console.log(param);
            that.$http.get("/v1/enterprise/getTotal", { params: param }).then(function (res) {
                that.page.total = res.body.response_param.total;
                that.page.size = res.body.response_param.pageSize;
                that.page.current = 1;
            }, function (error) {
                that.errorFunc(error.body.error_msg);
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
            if (that.enterpriseNumbers === "") {
                that.warnFunc("请输入企业E号！");
                return;
            }
            var numbers = that.enterpriseNumbers.split(",");
            numbers.forEach(function (value, index) {
                that.submitParam.enterpriseNumbers.push(parseInt(value));
            });
            that.fullscreenLoading = true;
            var param = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(that.submitParam));
            that.$http.put("/v1/enterprise/execScript", param).then(function (res) {
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
            if (that.selectScript === "") {
                that.warnFunc("请选择需要执行的脚本！");
            } else {
                that.upgradeDialog = true;
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
        listScripts: function listScripts() {
            var that = this;
            that.$http.get("/v1/enterprise/listScripts").then(function (res) {
                res.body.response_param.forEach(function (value, index) {
                    var param = { scriptName: value };
                    that.tableData.push(param);
                });
            }, function (error) {
                errorFunc(error.body.error_msg);
            });
        },
        scriptSelect: function scriptSelect(val) {
            var that = this;
            that.submitParam.scriptName = val.scriptName;
        },
        cancleExec: function cancleExec() {
            var that = this;
            that.upgradeDialog = false;
            that.enterpriseNumbers = "";
            that.submitParam.scriptName = "";
            that.submitParam.enterpriseNumbers = [];
        },
        errorFunc: function errorFunc(msg) {
            that.$message.error(msg);
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
        that.listScripts();
    }
});

/***/ })

});