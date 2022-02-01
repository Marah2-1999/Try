var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> גושים'
            });
var format_KKana_Gush_2 = new ol.format.GeoJSON();
var features_KKana_Gush_2 = format_KKana_Gush_2.readFeatures(json_KKana_Gush_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KKana_Gush_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KKana_Gush_2.addFeatures(features_KKana_Gush_2);
var lyr_KKana_Gush_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KKana_Gush_2, 
                style: style_KKana_Gush_2,
                interactive: true,
                title: '<img src="styles/legend/KKana_Gush_2.png" /> K-Kana_Gush'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> חלקות דרכים'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> דרכים'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5,
maxResolution:3.3605359382714357,
 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> חלקות'
            });
var format_KKana_Helkot_6 = new ol.format.GeoJSON();
var features_KKana_Helkot_6 = format_KKana_Helkot_6.readFeatures(json_KKana_Helkot_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KKana_Helkot_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KKana_Helkot_6.addFeatures(features_KKana_Helkot_6);
var lyr_KKana_Helkot_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KKana_Helkot_6,
maxResolution:2.8004466152261966,
 
                style: style_KKana_Helkot_6,
                interactive: true,
                title: '<img src="styles/legend/KKana_Helkot_6.png" /> K-Kana_Helkot'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> חוזים םרטיים'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> טאבו הערות'
            });
var format___9 = new ol.format.GeoJSON();
var features___9 = format___9.readFeatures(json___9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___9.addFeatures(features___9);
var lyr___9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___9, 
                style: style___9,
                interactive: true,
                title: '<img src="styles/legend/__9.png" /> חוזים_מג\'ד'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> חלקות ציבורי'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: true,
    title: 'שטח ציבורי פתוח<br />\
    <img src="styles/legend/_11_0.png" /> שטח ציבורי פתוח<br />\
    <img src="styles/legend/_11_1.png" /> <br />'
        });
var format___12 = new ol.format.GeoJSON();
var features___12 = format___12.readFeatures(json___12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___12.addFeatures(features___12);
var lyr___12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___12,
maxResolution:4.200669922839294,
 
                style: style___12,
                interactive: true,
    title: 'חלקות_דרכים <br />\
    <img src="styles/legend/__12_0.png" /> דרך גישה מוצעת<br />\
    <img src="styles/legend/__12_1.png" /> דרך מאושרת (מבאת)<br />\
    <img src="styles/legend/__12_2.png" /> דרך מוצעת<br />\
    <img src="styles/legend/__12_3.png" /> דרך מוצעת (מבאת)<br />\
    <img src="styles/legend/__12_4.png" /> דרך מוצעת או הרחבה מוצעת<br />\
    <img src="styles/legend/__12_5.png" /> דרך משולבת (מבאת)<br />\
    <img src="styles/legend/__12_6.png" /> דרך משולבת מוצעת<br />\
    <img src="styles/legend/__12_7.png" /> דרך קיימת או מאושרת<br />\
    <img src="styles/legend/__12_8.png" /> דרך קיימת-מאושרת<br />\
    <img src="styles/legend/__12_9.png" /> חניה מוצעת או הרחבה מוצעת<br />\
    <img src="styles/legend/__12_10.png" /> חניה ציבורית<br />\
    <img src="styles/legend/__12_11.png" /> חניה קיימת או מאושרת<br />\
    <img src="styles/legend/__12_12.png" /> <br />'
        });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__13,
maxResolution:2.8004466152261966,
 
                style: style__13,
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> בתים'
            });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__14, 
                style: style__14,
                interactive: true,
                title: '<img src="styles/legend/_14.png" /> בנייני ציבור'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr_KKana_Gush_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr_KKana_Helkot_6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr___9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr___12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr_KKana_Gush_2,lyr__3,lyr__4,lyr__5,lyr_KKana_Helkot_6,lyr__7,lyr__8,lyr___9,lyr__10,lyr__11,lyr___12,lyr__13,lyr__14];
lyr__1.set('fieldAliases', {'LOT_NUM': 'LOT_NUM', 'Shape_Area': 'Shape_Area', });
lyr_KKana_Gush_2.set('fieldAliases', {'LOT_NUM': 'LOT_NUM', 'Shape_Area': 'Shape_Area', });
lyr__3.set('fieldAliases', {'PARCEL_NUM': 'PARCEL_NUM', 'LOT_NUM': 'LOT_NUM', 'Shape_Area': 'Shape_Area', 'Taba_Yeud': 'Taba_Yeud', 'Ystr': 'Ystr', 'Migrash': 'Migrash', 'Shape_Ar_1': 'Shape_Ar_1', 'Gush_1': 'Gush_1', 'Helka_1': 'Helka_1', });
lyr__4.set('fieldAliases', {'Taba_Yeud': 'Taba_Yeud', 'Ystr': 'Ystr', 'Migrash': 'Migrash', 'Shape_Area': 'Shape_Area', 'Gush_1': 'Gush_1', 'Helka_1': 'Helka_1', });
lyr__5.set('fieldAliases', {'PARCEL_NUM': 'PARCEL_NUM', 'LOT_NUM': 'LOT_NUM', 'Shape_Area': 'Shape_Area', });
lyr_KKana_Helkot_6.set('fieldAliases', {'PARCEL_NUM': 'PARCEL_NUM', 'LOT_NUM': 'LOT_NUM', 'Shape_Area': 'Shape_Area', });
lyr__7.set('fieldAliases', {'PARCEL_NUM': 'PARCEL_NUM', 'LOT_NUM': 'LOT_NUM', 'חוזה_': 'חוזה_', 'חלקה': 'חלקה', 'F4': 'F4', 'F5': 'F5', 'תאריך': 'תאריך', 'תוקף': 'תוקף', 'F9': 'F9', 'ID_PB_1': 'ID_PB_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__8.set('fieldAliases', {'PARCEL_NUM': 'PARCEL_NUM', 'Taba_Yeud': 'Taba_Yeud', 'Ystr': 'Ystr', 'Migrash': 'Migrash', 'Taba_Migra': 'Taba_Migra', 'ID': 'ID', 'comment': 'comment', 'Shape_Area': 'Shape_Area', 'ID_MigH': 'ID_MigH', 'Gush_1': 'Gush_1', 'Helka_1': 'Helka_1', });
lyr___9.set('fieldAliases', {'גיליו': 'גיליו', 'גילי_1': 'גילי_1', 'גילי_2': 'גילי_2', 'גילי_3': 'גילי_3', 'גילי_4': 'גילי_4', 'גילי_5': 'גילי_5', });
lyr__10.set('fieldAliases', {'PARCEL_NUM': 'PARCEL_NUM', 'Shape_Area': 'Shape_Area', 'Taba_Yeud': 'Taba_Yeud', 'Ystr': 'Ystr', 'Migrash': 'Migrash', 'Shape_Ar_1': 'Shape_Ar_1', 'Gush': 'Gush', 'Helka_1': 'Helka_1', });
lyr__11.set('fieldAliases', {'Taba_Yeud': 'Taba_Yeud', 'Ystr': 'Ystr', 'Migrash': 'Migrash', 'Shape_Area': 'Shape_Area', 'Gush_1': 'Gush_1', 'Helka_1': 'Helka_1', 'Report': 'Report', 'Image': 'Image', });
lyr___12.set('fieldAliases', {'PARCEL_NUM': 'PARCEL_NUM', 'LOT_NUM': 'LOT_NUM', 'Shape_Area': 'Shape_Area', 'Taba_Yeud': 'Taba_Yeud', 'Ystr': 'Ystr', 'Migrash': 'Migrash', 'Shape_Ar_1': 'Shape_Ar_1', 'Gush_1': 'Gush_1', 'Helka_1': 'Helka_1', });
lyr__13.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr__14.set('fieldAliases', {'Taba_Yeud': 'Taba_Yeud', 'Ystr': 'Ystr', 'Migrash': 'Migrash', 'Shape_Area': 'Shape_Area', 'Gush_1': 'Gush_1', 'Helka_1': 'Helka_1', 'Image': 'Image', });
lyr__1.set('fieldImages', {'LOT_NUM': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KKana_Gush_2.set('fieldImages', {'LOT_NUM': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__3.set('fieldImages', {'PARCEL_NUM': 'TextEdit', 'LOT_NUM': 'TextEdit', 'Shape_Area': 'TextEdit', 'Taba_Yeud': 'TextEdit', 'Ystr': 'TextEdit', 'Migrash': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Gush_1': 'Range', 'Helka_1': 'Range', });
lyr__4.set('fieldImages', {'Taba_Yeud': 'TextEdit', 'Ystr': 'TextEdit', 'Migrash': 'TextEdit', 'Shape_Area': 'TextEdit', 'Gush_1': 'Range', 'Helka_1': 'Range', });
lyr__5.set('fieldImages', {'PARCEL_NUM': 'TextEdit', 'LOT_NUM': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KKana_Helkot_6.set('fieldImages', {'PARCEL_NUM': 'TextEdit', 'LOT_NUM': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__7.set('fieldImages', {'PARCEL_NUM': 'TextEdit', 'LOT_NUM': 'TextEdit', 'חוזה_': 'TextEdit', 'חלקה': 'TextEdit', 'F4': 'TextEdit', 'F5': 'TextEdit', 'תאריך': 'TextEdit', 'תוקף': 'TextEdit', 'F9': 'TextEdit', 'ID_PB_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__8.set('fieldImages', {'PARCEL_NUM': '', 'Taba_Yeud': '', 'Ystr': '', 'Migrash': '', 'Taba_Migra': '', 'ID': '', 'comment': '', 'Shape_Area': '', 'ID_MigH': '', 'Gush_1': '', 'Helka_1': '', });
lyr___9.set('fieldImages', {'גיליו': 'TextEdit', 'גילי_1': 'TextEdit', 'גילי_2': 'TextEdit', 'גילי_3': 'TextEdit', 'גילי_4': 'TextEdit', 'גילי_5': 'TextEdit', });
lyr__10.set('fieldImages', {'PARCEL_NUM': 'TextEdit', 'Shape_Area': 'TextEdit', 'Taba_Yeud': 'TextEdit', 'Ystr': 'TextEdit', 'Migrash': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Gush': 'Range', 'Helka_1': 'Range', });
lyr__11.set('fieldImages', {'Taba_Yeud': 'TextEdit', 'Ystr': 'TextEdit', 'Migrash': 'TextEdit', 'Shape_Area': 'TextEdit', 'Gush_1': 'Range', 'Helka_1': 'Range', 'Report': 'TextEdit', 'Image': 'ExternalResource', });
lyr___12.set('fieldImages', {'PARCEL_NUM': 'TextEdit', 'LOT_NUM': 'TextEdit', 'Shape_Area': 'TextEdit', 'Taba_Yeud': 'TextEdit', 'Ystr': 'TextEdit', 'Migrash': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Gush_1': 'Range', 'Helka_1': 'Range', });
lyr__13.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr__14.set('fieldImages', {'Taba_Yeud': 'TextEdit', 'Ystr': 'TextEdit', 'Migrash': 'TextEdit', 'Shape_Area': 'TextEdit', 'Gush_1': 'Range', 'Helka_1': 'Range', 'Image': 'ExternalResource', });
lyr__1.set('fieldLabels', {'LOT_NUM': 'inline label', 'Shape_Area': 'inline label', });
lyr_KKana_Gush_2.set('fieldLabels', {'LOT_NUM': 'inline label', 'Shape_Area': 'inline label', });
lyr__3.set('fieldLabels', {'PARCEL_NUM': 'inline label', 'LOT_NUM': 'inline label', 'Shape_Area': 'inline label', 'Taba_Yeud': 'inline label', 'Ystr': 'inline label', 'Migrash': 'inline label', 'Shape_Ar_1': 'inline label', 'Gush_1': 'inline label', 'Helka_1': 'inline label', });
lyr__4.set('fieldLabels', {'Taba_Yeud': 'inline label', 'Ystr': 'inline label', 'Migrash': 'inline label', 'Shape_Area': 'inline label', 'Gush_1': 'inline label', 'Helka_1': 'inline label', });
lyr__5.set('fieldLabels', {'PARCEL_NUM': 'inline label', 'LOT_NUM': 'inline label', 'Shape_Area': 'inline label', });
lyr_KKana_Helkot_6.set('fieldLabels', {'PARCEL_NUM': 'inline label', 'LOT_NUM': 'inline label', 'Shape_Area': 'inline label', });
lyr__7.set('fieldLabels', {'PARCEL_NUM': 'inline label', 'LOT_NUM': 'inline label', 'חוזה_': 'inline label', 'חלקה': 'inline label', 'F4': 'inline label', 'F5': 'inline label', 'תאריך': 'inline label', 'תוקף': 'inline label', 'F9': 'inline label', 'ID_PB_1': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr__8.set('fieldLabels', {'PARCEL_NUM': 'inline label', 'Taba_Yeud': 'inline label', 'Ystr': 'inline label', 'Migrash': 'inline label', 'Taba_Migra': 'inline label', 'ID': 'inline label', 'comment': 'inline label', 'Shape_Area': 'inline label', 'ID_MigH': 'inline label', 'Gush_1': 'inline label', 'Helka_1': 'inline label', });
lyr___9.set('fieldLabels', {'גיליו': 'inline label', 'גילי_1': 'inline label', 'גילי_2': 'inline label', 'גילי_3': 'inline label', 'גילי_4': 'inline label', 'גילי_5': 'inline label', });
lyr__10.set('fieldLabels', {'PARCEL_NUM': 'inline label', 'Shape_Area': 'inline label', 'Taba_Yeud': 'inline label', 'Ystr': 'inline label', 'Migrash': 'inline label', 'Shape_Ar_1': 'inline label', 'Gush': 'inline label', 'Helka_1': 'inline label', });
lyr__11.set('fieldLabels', {'Taba_Yeud': 'inline label', 'Ystr': 'inline label', 'Migrash': 'inline label', 'Shape_Area': 'inline label', 'Gush_1': 'inline label', 'Helka_1': 'inline label', 'Report': 'inline label', 'Image': 'inline label', });
lyr___12.set('fieldLabels', {'PARCEL_NUM': 'inline label', 'LOT_NUM': 'inline label', 'Shape_Area': 'inline label', 'Taba_Yeud': 'inline label', 'Ystr': 'inline label', 'Migrash': 'inline label', 'Shape_Ar_1': 'inline label', 'Gush_1': 'inline label', 'Helka_1': 'inline label', });
lyr__13.set('fieldLabels', {'FID_': 'inline label', 'Entity': 'inline label', 'Layer': 'inline label', 'Color': 'inline label', 'Linetype': 'inline label', 'Elevation': 'inline label', 'LineWt': 'inline label', 'RefName': 'inline label', });
lyr__14.set('fieldLabels', {'Taba_Yeud': 'inline label', 'Ystr': 'inline label', 'Migrash': 'inline label', 'Shape_Area': 'inline label', 'Gush_1': 'inline label', 'Helka_1': 'inline label', 'Image': 'inline label', });
lyr__14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});