var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Hotspot_Overlap_vhotspot_overlap_v_1 = new ol.format.GeoJSON();
var features_Hotspot_Overlap_vhotspot_overlap_v_1 = format_Hotspot_Overlap_vhotspot_overlap_v_1.readFeatures(json_Hotspot_Overlap_vhotspot_overlap_v_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotspot_Overlap_vhotspot_overlap_v_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotspot_Overlap_vhotspot_overlap_v_1.addFeatures(features_Hotspot_Overlap_vhotspot_overlap_v_1);
var lyr_Hotspot_Overlap_vhotspot_overlap_v_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotspot_Overlap_vhotspot_overlap_v_1, 
                style: style_Hotspot_Overlap_vhotspot_overlap_v_1,
                popuplayertitle: 'Hotspot_Overlap_v — hotspot_overlap_v',
                interactive: true,
    title: 'Hotspot_Overlap_v — hotspot_overlap_v<br />\
    <img src="styles/legend/Hotspot_Overlap_vhotspot_overlap_v_1_0.png" /> 0<br />\
    <img src="styles/legend/Hotspot_Overlap_vhotspot_overlap_v_1_1.png" /> 1<br />\
    <img src="styles/legend/Hotspot_Overlap_vhotspot_overlap_v_1_2.png" /> <br />' });
var format_Solo_SaludRuido_vsolo_saludruido_v_2 = new ol.format.GeoJSON();
var features_Solo_SaludRuido_vsolo_saludruido_v_2 = format_Solo_SaludRuido_vsolo_saludruido_v_2.readFeatures(json_Solo_SaludRuido_vsolo_saludruido_v_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solo_SaludRuido_vsolo_saludruido_v_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solo_SaludRuido_vsolo_saludruido_v_2.addFeatures(features_Solo_SaludRuido_vsolo_saludruido_v_2);
var lyr_Solo_SaludRuido_vsolo_saludruido_v_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solo_SaludRuido_vsolo_saludruido_v_2, 
                style: style_Solo_SaludRuido_vsolo_saludruido_v_2,
                popuplayertitle: 'Solo_SaludRuido_v — solo_saludruido_v',
                interactive: true,
    title: 'Solo_SaludRuido_v — solo_saludruido_v<br />\
    <img src="styles/legend/Solo_SaludRuido_vsolo_saludruido_v_2_0.png" /> 0<br />\
    <img src="styles/legend/Solo_SaludRuido_vsolo_saludruido_v_2_1.png" /> 1<br />\
    <img src="styles/legend/Solo_SaludRuido_vsolo_saludruido_v_2_2.png" /> <br />' });
var format_CentrosSalud_Jrzsalud_jrz_3 = new ol.format.GeoJSON();
var features_CentrosSalud_Jrzsalud_jrz_3 = format_CentrosSalud_Jrzsalud_jrz_3.readFeatures(json_CentrosSalud_Jrzsalud_jrz_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosSalud_Jrzsalud_jrz_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosSalud_Jrzsalud_jrz_3.addFeatures(features_CentrosSalud_Jrzsalud_jrz_3);
var lyr_CentrosSalud_Jrzsalud_jrz_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentrosSalud_Jrzsalud_jrz_3, 
                style: style_CentrosSalud_Jrzsalud_jrz_3,
                popuplayertitle: 'CentrosSalud_Jrz — salud_jrz',
                interactive: true,
                title: '<img src="styles/legend/CentrosSalud_Jrzsalud_jrz_3.png" /> CentrosSalud_Jrz — salud_jrz'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_Hotspot_Overlap_vhotspot_overlap_v_1.setVisible(true);lyr_Solo_SaludRuido_vsolo_saludruido_v_2.setVisible(true);lyr_CentrosSalud_Jrzsalud_jrz_3.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_Hotspot_Overlap_vhotspot_overlap_v_1,lyr_Solo_SaludRuido_vsolo_saludruido_v_2,lyr_CentrosSalud_Jrzsalud_jrz_3];
lyr_Hotspot_Overlap_vhotspot_overlap_v_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Solo_SaludRuido_vsolo_saludruido_v_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_CentrosSalud_Jrzsalud_jrz_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'clee': 'clee', 'nom_estab': 'nom_estab', 'codigo_act': 'codigo_act', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'tipo_vial': 'tipo_vial', 'nom_vial': 'nom_vial', 'numero_ext': 'numero_ext', 'letra_ext': 'letra_ext', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'num_local': 'num_local', 'cod_postal': 'cod_postal', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_Hotspot_Overlap_vhotspot_overlap_v_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Solo_SaludRuido_vsolo_saludruido_v_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_CentrosSalud_Jrzsalud_jrz_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'clee': 'TextEdit', 'nom_estab': 'TextEdit', 'codigo_act': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'tipo_vial': 'TextEdit', 'nom_vial': 'TextEdit', 'numero_ext': 'TextEdit', 'letra_ext': 'TextEdit', 'tipo_asent': 'TextEdit', 'nomb_asent': 'TextEdit', 'num_local': 'TextEdit', 'cod_postal': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_Hotspot_Overlap_vhotspot_overlap_v_1.set('fieldLabels', {'fid': 'hidden field', 'DN': 'inline label - visible with data', });
lyr_Solo_SaludRuido_vsolo_saludruido_v_2.set('fieldLabels', {'fid': 'hidden field', 'DN': 'inline label - visible with data', });
lyr_CentrosSalud_Jrzsalud_jrz_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'clee': 'hidden field', 'nom_estab': 'inline label - always visible', 'codigo_act': 'hidden field', 'nombre_act': 'inline label - visible with data', 'per_ocu': 'inline label - visible with data', 'tipo_vial': 'inline label - visible with data', 'nom_vial': 'inline label - visible with data', 'numero_ext': 'inline label - visible with data', 'letra_ext': 'no label', 'tipo_asent': 'no label', 'nomb_asent': 'no label', 'num_local': 'no label', 'cod_postal': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'fecha_alta': 'no label', });
lyr_CentrosSalud_Jrzsalud_jrz_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});