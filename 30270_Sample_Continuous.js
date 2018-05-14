// Label 30270
function printLabel30270(text1, text2){
	var labelXML = '<?xml version="1.0" encoding="utf-8"?>\
<ContinuousLabel Version="8.0" Units="twips">\
  <PaperOrientation>Portrait</PaperOrientation>\
  <Id>Continuous</Id>\
  <PaperName>30270 Continuous</PaperName>\
  <LengthMode>Auto</LengthMode>\
  <LabelLength>0</LabelLength>\
  <RootCell>\
    <Length>0</Length>\
    <LengthMode>Auto</LengthMode>\
    <BorderWidth>0</BorderWidth>\
    <BorderStyle>Solid</BorderStyle>\
    <BorderColor Alpha="255" Red="0" Green="0" Blue="0"/>\
    <SubcellsOrientation>Vertical</SubcellsOrientation>\
    <Subcells>\
      <Cell>\
        <TextObject>\
          <Name>TEXT</Name>\
          <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
          <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
          <LinkedObjectName></LinkedObjectName>\
          <Rotation>Rotation0</Rotation>\
          <IsMirrored>False</IsMirrored>\
          <IsVariable>False</IsVariable>\
          <HorizontalAlignment>Left</HorizontalAlignment>\
          <VerticalAlignment>Middle</VerticalAlignment>\
          <TextFitMode>AlwaysFit</TextFitMode>\
          <UseFullFontHeight>True</UseFullFontHeight>\
          <Verticalized>False</Verticalized>\
          <StyledText>\
            <Element>\
              <String>Click here to enter text</String>\
              <Attributes>\
                <Font Family="Helvetica" Size="13" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
              </Attributes>\
            </Element>\
          </StyledText>\
        </TextObject>\
        <ObjectMargin Left="0" Right="0" Top="200" Bottom="200"/>\
        <Length>320</Length>\
        <LengthMode>Fixed</LengthMode>\
        <BorderWidth>0</BorderWidth>\
        <BorderStyle>Solid</BorderStyle>\
        <BorderColor Alpha="255" Red="0" Green="0" Blue="0"/>\
      </Cell>\
      <Cell>\
        <TextObject>\
          <Name>TEXT_1</Name>\
          <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
          <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
          <LinkedObjectName></LinkedObjectName>\
          <Rotation>Rotation0</Rotation>\
          <IsMirrored>False</IsMirrored>\
          <IsVariable>False</IsVariable>\
          <HorizontalAlignment>Left</HorizontalAlignment>\
          <VerticalAlignment>Middle</VerticalAlignment>\
          <TextFitMode>ShrinkToFit</TextFitMode>\
          <UseFullFontHeight>True</UseFullFontHeight>\
          <Verticalized>False</Verticalized>\
          <StyledText>\
            <Element>\
              <String>Testing 1</String>\
              <Attributes>\
                <Font Family="Helvetica" Size="13" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
              </Attributes>\
            </Element>\
          </StyledText>\
        </TextObject>\
        <ObjectMargin Left="0" Right="0" Top="200" Bottom="200"/>\
        <Length>760</Length>\
        <LengthMode>Auto</LengthMode>\
        <BorderWidth>0</BorderWidth>\
        <BorderStyle>Solid</BorderStyle>\
        <BorderColor Alpha="255" Red="0" Green="0" Blue="0"/>\
      </Cell>\
      <Cell>\
        <TextObject>\
          <Name>TEXT_2</Name>\
          <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
          <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
          <LinkedObjectName></LinkedObjectName>\
          <Rotation>Rotation0</Rotation>\
          <IsMirrored>False</IsMirrored>\
          <IsVariable>False</IsVariable>\
          <HorizontalAlignment>Left</HorizontalAlignment>\
          <VerticalAlignment>Middle</VerticalAlignment>\
          <TextFitMode>ShrinkToFit</TextFitMode>\
          <UseFullFontHeight>True</UseFullFontHeight>\
          <Verticalized>False</Verticalized>\
          <StyledText>\
            <Element>\
              <String>Testing 2</String>\
              <Attributes>\
                <Font Family="Helvetica" Size="13" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
              </Attributes>\
            </Element>\
          </StyledText>\
        </TextObject>\
        <ObjectMargin Left="0" Right="0" Top="200" Bottom="200"/>\
        <Length>760</Length>\
        <LengthMode>Auto</LengthMode>\
        <BorderWidth>0</BorderWidth>\
        <BorderStyle>Solid</BorderStyle>\
        <BorderColor Alpha="255" Red="0" Green="0" Blue="0"/>\
      </Cell>\
      <Cell>\
        <BarcodeObject>\
          <Name>BARCODE</Name>\
          <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
          <BackColor Alpha="255" Red="255" Green="255" Blue="255"/>\
          <LinkedObjectName></LinkedObjectName>\
          <Rotation>Rotation0</Rotation>\
          <IsMirrored>False</IsMirrored>\
          <IsVariable>False</IsVariable>\
          <Text>9876321</Text>\
          <Type>Code39</Type>\
          <Size>Medium</Size>\
          <TextPosition>Bottom</TextPosition>\
          <TextFont Family="Helvetica" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
          <CheckSumFont Family="Helvetica" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
          <TextEmbedding>None</TextEmbedding>\
          <ECLevel>0</ECLevel>\
          <HorizontalAlignment>Center</HorizontalAlignment>\
          <QuietZonesPadding Left="0" Right="0" Top="0" Bottom="0"/>\
        </BarcodeObject>\
        <ObjectMargin Left="0" Right="0" Top="200" Bottom="200"/>\
        <Length>1435.2</Length>\
        <LengthMode>Auto</LengthMode>\
        <BorderWidth>0</BorderWidth>\
        <BorderStyle>Solid</BorderStyle>\
        <BorderColor Alpha="255" Red="0" Green="0" Blue="0"/>\
      </Cell>\
    </Subcells>\
  </RootCell>\
</ContinuousLabel>';
	// Complile Label from XML	
	var label = dymo.label.framework.openLabelXml(labelXML);
	// Set Label Text
	label.setObjectText("TEXT_2",text1);
	label.setObjectText("BARCODE",text2);
	// Get All Printers
	//var printers = dymo.label.framework.getPrinters();
	
	/* Print Printers Name for Demo, Ignore Upon Implement
	var printers_name = '';
	var i;
	for(i = 0; i < printers.length; i++)
		printers_name += printers[i].name+' ';
	alert(printers_name);
	*/
	
	// Set Static name for Quick Access
	var printer = 'DYMO LabelWriter 450';
	label.print(printer);
}
