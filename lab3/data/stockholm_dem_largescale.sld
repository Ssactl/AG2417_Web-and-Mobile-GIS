<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" version="1.0.0" xmlns:sld="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>Hojddata2m</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:MaxScaleDenominator>20000</sld:MaxScaleDenominator>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry label="0,8000" color="#f7fbff" quantity="0.80000001192092995"/>
              <sld:ColorMapEntry label="7,0449" color="#deebf7" quantity="7.0449466198682593"/>
              <sld:ColorMapEntry label="13,2899" color="#c6dbef" quantity="13.28989322781559"/>
              <sld:ColorMapEntry label="19,5348" color="#9ecae1" quantity="19.534839835762916"/>
              <sld:ColorMapEntry label="25,7798" color="#6baed6" quantity="25.779786443710247"/>
              <sld:ColorMapEntry label="32,0247" color="#4292c6" quantity="32.024733051657577"/>
              <sld:ColorMapEntry label="38,2697" color="#2171b5" quantity="38.269679659604904"/>
              <sld:ColorMapEntry label="44,0342" color="#08519c" quantity="44.034245759248591"/>
              <sld:ColorMapEntry label="48,8381" color="#08306b" quantity="48.838050842285"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
