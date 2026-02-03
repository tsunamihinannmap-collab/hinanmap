var wms_layers = [];


        var lyr_tiriinn_0 = new ol.layer.Tile({
            'title': 'tiriinn',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });

        var lyr_sinnsui_1 = new ol.layer.Tile({
            'title': 'sinnsui',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://disaportaldata.gsi.go.jp/raster/04_tsunami_newlegend_pref_data/36/{z}/{x}/{y}.png'
            })
        });
var format_no_sutekka_2 = new ol.format.GeoJSON();
var features_no_sutekka_2 = format_no_sutekka_2.readFeatures(json_no_sutekka_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_no_sutekka_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_no_sutekka_2.addFeatures(features_no_sutekka_2);
var lyr_no_sutekka_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_no_sutekka_2, 
                style: style_no_sutekka_2,
                popuplayertitle: 'no_sutekka',
                interactive: true,
                title: '<img src="styles/legend/no_sutekka_2.png" /> no_sutekka'
            });
var format_sutekka_3 = new ol.format.GeoJSON();
var features_sutekka_3 = format_sutekka_3.readFeatures(json_sutekka_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sutekka_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sutekka_3.addFeatures(features_sutekka_3);
var lyr_sutekka_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sutekka_3, 
                style: style_sutekka_3,
                popuplayertitle: 'sutekka',
                interactive: true,
                title: '<img src="styles/legend/sutekka_3.png" /> sutekka'
            });
var group_ = new ol.layer.Group({
                                layers: [lyr_sinnsui_1,lyr_no_sutekka_2,lyr_sutekka_3,],
                                fold: 'open',
                                title: 'ステッカー'});

lyr_tiriinn_0.setVisible(true);lyr_sinnsui_1.setVisible(true);lyr_no_sutekka_2.setVisible(true);lyr_sutekka_3.setVisible(true);
var layersList = [lyr_tiriinn_0,group_];
lyr_no_sutekka_2.set('fieldAliases', {'名称': '名称', '所在地': '所在地', 'field_3': 'field_3', '階数': '階数', '利用できる場所': '利用できる場所', '避難人数': '避難人数', 'ステッカーの有無': 'ステッカーの有無', 'field_8': 'field_8', '座標x': '座標x', 'y': 'y', });
lyr_sutekka_3.set('fieldAliases', {'col0': 'col0', 'col1': 'col1', 'col2': 'col2', 'LocName': 'LocName', 'fX': 'fX', 'fY': 'fY', 'iConf': 'iConf', 'iLvl': 'iLvl', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr_no_sutekka_2.set('fieldImages', {'名称': 'TextEdit', '所在地': 'TextEdit', 'field_3': 'TextEdit', '階数': 'Range', '利用できる場所': 'TextEdit', '避難人数': 'TextEdit', 'ステッカーの有無': 'TextEdit', 'field_8': 'TextEdit', '座標x': 'TextEdit', 'y': 'TextEdit', });
lyr_sutekka_3.set('fieldImages', {'col0': 'TextEdit', 'col1': 'TextEdit', 'col2': 'TextEdit', 'LocName': 'TextEdit', 'fX': 'TextEdit', 'fY': 'TextEdit', 'iConf': 'TextEdit', 'iLvl': 'TextEdit', 'field_9': 'Range', 'field_10': 'Range', });
lyr_no_sutekka_2.set('fieldLabels', {'名称': 'no label', '所在地': 'no label', 'field_3': 'no label', '階数': 'no label', '利用できる場所': 'no label', '避難人数': 'no label', 'ステッカーの有無': 'no label', 'field_8': 'no label', '座標x': 'no label', 'y': 'no label', });
lyr_sutekka_3.set('fieldLabels', {'col0': 'no label', 'col1': 'no label', 'col2': 'no label', 'LocName': 'no label', 'fX': 'no label', 'fY': 'no label', 'iConf': 'no label', 'iLvl': 'no label', 'field_9': 'no label', 'field_10': 'no label', });
lyr_sutekka_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});