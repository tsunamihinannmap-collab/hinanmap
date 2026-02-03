var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'ちりいん',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': '津波浸水',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://disaportaldata.gsi.go.jp/raster/04_tsunami_newlegend_pref_data/36/{z}/{x}/{y}.png'
            })
        });
var format_1000_2 = new ol.format.GeoJSON();
var features_1000_2 = format_1000_2.readFeatures(json_1000_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1000_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1000_2.addFeatures(features_1000_2);
var lyr_1000_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1000_2, 
                style: style_1000_2,
                popuplayertitle: '1000人以上',
                interactive: true,
                title: '<img src="styles/legend/1000_2.png" /> 1000人以上'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '津波避難ビルのステッカーがないところ',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 津波避難ビルのステッカーがないところ'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'ステッカーあり',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> ステッカーあり'
            });
var group_ = new ol.layer.Group({
                                layers: [lyr__1,lyr_1000_2,lyr__3,lyr__4,],
                                fold: 'open',
                                title: 'ステッカー'});

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr_1000_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr__0,group_];
lyr_1000_2.set('fieldAliases', {'徳島市民病院 立体駐車場': '徳島市民病院 立体駐車場', '北常三島町2丁目34番地': '北常三島町2丁目34番地', '徳島県徳島市北常三島町2丁目34番地': '徳島県徳島市北常三島町2丁目34番地', '2': '2', '2階 駐車場、屋上 駐車場': '2階 駐車場、屋上 駐車場', '1,902': '1,902', '134.5623865': '134.5623865', '34.0816577': '34.0816577', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr__3.set('fieldAliases', {'名称': '名称', '所在地': '所在地', 'field_3': 'field_3', '階数': '階数', '利用できる場所': '利用できる場所', '避難人数': '避難人数', 'ステッカーの有無': 'ステッカーの有無', 'field_8': 'field_8', '座標x': '座標x', 'y': 'y', });
lyr__4.set('fieldAliases', {'col0': 'col0', 'col1': 'col1', 'col2': 'col2', 'LocName': 'LocName', 'fX': 'fX', 'fY': 'fY', 'iConf': 'iConf', 'iLvl': 'iLvl', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr_1000_2.set('fieldImages', {'徳島市民病院 立体駐車場': '', '北常三島町2丁目34番地': '', '徳島県徳島市北常三島町2丁目34番地': '', '2': '', '2階 駐車場、屋上 駐車場': '', '1,902': '', '134.5623865': '', '34.0816577': '', 'field_9': '', 'field_10': '', });
lyr__3.set('fieldImages', {'名称': 'TextEdit', '所在地': 'TextEdit', 'field_3': 'TextEdit', '階数': 'Range', '利用できる場所': 'TextEdit', '避難人数': 'TextEdit', 'ステッカーの有無': 'TextEdit', 'field_8': 'TextEdit', '座標x': 'TextEdit', 'y': 'TextEdit', });
lyr__4.set('fieldImages', {'col0': 'TextEdit', 'col1': 'TextEdit', 'col2': 'TextEdit', 'LocName': 'TextEdit', 'fX': 'TextEdit', 'fY': 'TextEdit', 'iConf': 'TextEdit', 'iLvl': 'TextEdit', 'field_9': 'Range', 'field_10': 'Range', });
lyr_1000_2.set('fieldLabels', {'徳島市民病院 立体駐車場': 'no label', '北常三島町2丁目34番地': 'no label', '徳島県徳島市北常三島町2丁目34番地': 'no label', '2': 'no label', '2階 駐車場、屋上 駐車場': 'no label', '1,902': 'no label', '134.5623865': 'no label', '34.0816577': 'no label', 'field_9': 'no label', 'field_10': 'no label', });
lyr__3.set('fieldLabels', {'名称': 'no label', '所在地': 'no label', 'field_3': 'no label', '階数': 'no label', '利用できる場所': 'no label', '避難人数': 'no label', 'ステッカーの有無': 'no label', 'field_8': 'no label', '座標x': 'no label', 'y': 'no label', });
lyr__4.set('fieldLabels', {'col0': 'no label', 'col1': 'no label', 'col2': 'no label', 'LocName': 'no label', 'fX': 'no label', 'fY': 'no label', 'iConf': 'no label', 'iLvl': 'no label', 'field_9': 'no label', 'field_10': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});