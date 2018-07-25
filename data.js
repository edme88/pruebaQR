var miapp = angular.module('miapp',[]).controller("micontrolador",function($scope) {
    $scope.items = [
        {
            "Producto": "Bluethood Beacons",
            "Marca": "Aruba",
            "CodigoFinnegans": "ARUBA00037",
            "datasheets-text": ["ARUBA BEACONS: BLE-powered Location and Proximity Services"],
            "datasheet-url": ["https://drive.google.com/open?id=0Bx5Eg5OBbHdWR1F6V1ZWLUtoZTA"],
            "cantidad": 1,
            "proyecto": ["Ninguno"],
        },
        {
            "Producto": "Monitor Led 21,5'",
            "Marca": "CX",
            "CodigoFinnegans": "MOYTV00008",
            "datasheets-text": [""],
            "datasheet-url": [""],
            "cantidad": 1,
            "proyecto": ["Ninguno"],
        }
    ]
});