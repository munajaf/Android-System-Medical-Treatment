angular.module('app.controllers', [])

    .controller('logMasukCtrl', ['$scope', '$http', '$state','$ionicPopup','$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $http, $state, $ionicPopup, $stateParams ) {

            $scope.data = {}

            $scope.CheckBurp = function(){
                if($scope.data.email && $scope.data.password){
                    $scope.result = "";
                    $http.get('http://localhost/asmt/login.php?Login=1&username='+ $scope.data.email+'&password='+$scope.data.password)
                        .success(function(data, status, headers,config){
                            //console.log('data success');
                            //console.log(data); // for browser console
                            $scope.result = data; // for UI
                        })
                        .error(function(data, status, headers,config){
                            console.log('data error');
                            $ionicPopup.alert({
                                title: 'Error',
                                template : 'Wrong Username Or Password'
                            })

                        })
                        .then(function(result){
                            if($scope.result.api){
                                $state.go('home');
                            }

                        });
                }else{

                    $ionicPopup.alert({
                        title: 'Error',
                        template : 'Please Fill The Username And Password'
                    })
                }
            }

            /*$scope.CheckBurp = function (){
             $state.go('home');
             }*/
        }])

    .controller('hasilkanAkaunBaruCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('homeCtrl', ['$scope', '$http', '$state', '$ionicPopup','$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $http, $state, $ionicPopup, $stateParams) {
            $scope.data = {}

            $scope.Search = function(){
                if($scope.data.kp){
                    $scope.result = "";
                    $http.get('http://localhost/asmt/home.php?api=c3c536fda8a11ad7eecd61440206d29a&Search=1&KP='+$scope.data.kp)
                        .success(function(data, status, headers,config){
                            console.log('data success');
                            console.log(data); // for browser console
                            $scope.result = data; // for UI
                        })
                        .error(function(data, status, headers,config){
                            console.log('data error');
                            $ionicPopup.alert({
                                title: '<b>Ralat</b>',
                                template : 'Tiada Padanan Ditemui'
                            })
                            $scope.Show = false;

                        })
                        .then(function(result){
                            things = result.data;
                            $scope.Show = true;

                        });
                }else{

                    $ionicPopup.alert({
                        title: '<b>Ralat</b>',
                        template : 'Isikan input di atas'
                    })
                }
            }

        }])

    .controller('listAllCtrl', ['$scope', '$stateParams', '$http', '$rootScope', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $rootScope, $state) {


            $scope.data = {};
            $scope.result = "";
            $http.get('http://localhost/asmt/home.php?api=c3c536fda8a11ad7eecd61440206d29a&ShowAll=1')
                .success(function(data, status, headers,config){
                    console.log('data success');
                    console.log(data); // for browser console

                    $scope.result = data; // for UI
                    $scope.length = ( $scope.result.length);
                })
                .error(function(data, status, headers,config){
                    console.log('data error');
                    $ionicPopup.alert({
                        title: '<b>Ralat</b>',
                        template : 'Tiada Padanan Ditemui'
                    })
                    $scope.Show = false;

                })
                .then(function(result){
                    things = result.data;


                });

            $rootScope.$on('$viewContentLoading',
                function(){
                    console.log('derp');
                    $scope.data = {};
                    $scope.result = "";
                    $http.get('http://localhost/asmt/home.php?api=c3c536fda8a11ad7eecd61440206d29a&ShowAll=1')
                        .success(function(data, status, headers,config){
                            console.log('data success');
                            console.log(data); // for browser console

                            $scope.result = data; // for UI
                            $scope.length = ( $scope.result.length);
                        })
                        .error(function(data, status, headers,config){
                            console.log('data error');
                            $ionicPopup.alert({
                                title: '<b>Ralat</b>',
                                template : 'Tiada Sejarah yang ditemui'
                            })
                            $scope.Show = false;

                        })
                        .then(function(result){
                            things = result.data;


                        });
                });



            $scope.go = function (x) {
                console.log(x);
                if(x.jantina == "1"){
                    x.jantina1 = "Lelaki";
                }else{
                    x.jantina1 = "Perempuan";
                }
                $rootScope.info = x;
                $rootScope.update = x;
                $state.go("user")
            }
        }])

    .controller('userCtrl', ['$scope', '$stateParams','$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $rootScope) {

            $scope.userdata1 = $rootScope.info;
            $rootScope.$on('$viewContentLoading',
                function(){
                    $scope.userdata1 = $rootScope.info;
                    console.log($scope.userdata1);


                });
        }])

    .controller('rawatanAkupunkturCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('jingmingCtrl', ['$scope', '$stateParams', '$ionicPopup', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $ionicPopup, $rootScope) {


            $scope.Rawat = function() {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Menambah Rawatan Kepada ' + $rootScope.info.nama,
                    template: '<textarea style="height: 110px"></textarea>'
                });

                confirmPopup.then(function(res) {
                    if(res) {
                        console.log('You are sure');
                    } else {
                        console.log('You are not sure');
                    }
                });
            };

        }])

    .controller('rawatanBekamCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('komenCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('sejarahCtrl', ['$scope', '$stateParams','$http', '$rootScope','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $rootScope, $ionicPopup) {

            $scope.result = "";
            console.log($rootScope.update.id)
            $http.get('http://localhost/asmt/home.php?api=c3c536fda8a11ad7eecd61440206d29a&History=2&id='+ $rootScope.update.id)
                .success(function(data, status, headers,config){
                    console.log('data success');
                    console.log(data); // for browser console

                    $scope.result = data; // for UI

                })
                .error(function(data, status, headers,config){
                    console .log('data error');
                    $ionicPopup.alert({
                        title: '<b>Ralat</b>',
                        template : 'Tiada Padanan Ditemui'
                    })
                    $scope.Show = false;

                })
                .then(function(result){
                    things = result.data;


                });

            console.log($scope.result);






        }])

    .controller('sejarahBesarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('tambahPesakitCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $ionicPopup) {

            // Create Base64 Object
            var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
            $scope.data = {}
            $scope.addUser = function () {


                console.log($scope.data);
                var dude = {};
                dude.Nama = $scope.data.Nama; dude.Jantina = $scope.data.jantina; dude.KadPengenalan = $scope.data.kp; dude.TarikhLahir = $scope.data.tl;dude.TarafPerkahwinan = $scope.data.tl; dude.NoTelefon = $scope.data.telefon; dude.Pekerjaan = $scope.data.pekerjaan; dude.Alamat = $scope.data.alamat;
                // console.log($scope.Nama);
                var JsonData =  JSON.stringify(dude);
                var encodedString = Base64.encode(JsonData);
                //console.log(encodedString);
                $scope.result = "";
                $http.get('http://localhost/asmt/home.php?api=c3c536fda8a11ad7eecd61440206d29a&InsertClient=1&ClientData='+ encodeURI(encodedString))
                    .success(function(data, status, headers,config){
                        console.log('data success');
                        console.log(data); // for browser console

                        $scope.result = data; // for UI
                        $scope.length = ( $scope.result.length);
                    })
                    .error(function(data, status, headers,config){
                        console.log('data error');
                        $ionicPopup.alert({
                            title: '<b>Ralat</b>',
                            template : 'Kesemua Maklumat Perlu diisi'
                        })
                        $scope.Show = false;

                    })
                    .then(function(result){
                        things = result.data;


                    });

            }

        }])

    .controller('kemaskinipesakitCtrl', ['$scope', '$stateParams','$http', '$rootScope', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $rootScope, $state) {


            $scope.update1 = $rootScope.update;

            $rootScope.$on('$viewContentLoading',
                function(){
                    $scope.update = $rootScope.update;

                });



            $scope.update = function () {

                var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

                var dude = {};
                dude.Nama = $scope.update1.Nama; dude.Jantina = $scope.update1.jantina; dude.KadPengenalan = $scope.update1.kp; dude.TarikhLahir = $scope.update1.tl;dude.TarafPerkahwinan = $scope.update1.tl; dude.NoTelefon = $scope.update1.telefon; dude.Pekerjaan = $scope.update1.pekerjaan; dude.Alamat = $scope.update1.alamat;
                var JsonData =  JSON.stringify(dude);
                var encodedString = Base64.encode(JsonData);
                $scope.result = "";
                $http.get('http://localhost/asmt/home.php?api=c3c536fda8a11ad7eecd61440206d29a&UpdateCleint=1&id='+$scope.update.id+'&ClientData='+ encodeURI(encodedString))
                    .success(function(data, status, headers,config){
                        console.log('data success');
                        console.log(data); // for browser console

                        $scope.result = data; // for UI

                    })
                    .error(function(data, status, headers,config){
                        console.log('data error');
                        $ionicPopup.alert({
                            title: '<b>Ralat</b>',
                            template : 'Tiada Padanan Ditemui'
                        })
                        $scope.Show = false;

                    })
                    .then(function(result){
                        things = result.data;


                    });


            }
            // $scope.update = $rootScope.update;
        }])
 