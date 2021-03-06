// Label 30252
function printLabel30252(text1, text2){
	var labelXML = '<?xml version="1.0" encoding="utf-8"?>\
<DieCutLabel Version="8.0" Units="twips" MediaType="Default">\
  <PaperOrientation>Landscape</PaperOrientation>\
  <Id>Address</Id>\
  <PaperName>30252 Address</PaperName>\
  <DrawCommands>\
    <RoundRectangle X="0" Y="0" Width="1581" Height="5040" Rx="270" Ry="270"/>\
  </DrawCommands>\
  <ObjectInfo>\
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
    <Bounds X="331.2" Y="904.7875" Width="4622.4" Height="588.0126"/>\
  </ObjectInfo>\
  <ObjectInfo>\
    <BarcodeObject>\
      <Name>BARCODE</Name>\
      <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
      <BackColor Alpha="255" Red="255" Green="255" Blue="255"/>\
      <LinkedObjectName></LinkedObjectName>\
      <Rotation>Rotation0</Rotation>\
      <IsMirrored>False</IsMirrored>\
      <IsVariable>False</IsVariable>\
      <Text>12345</Text>\
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
    <Bounds X="331.2" Y="346.1937" Width="4354.375" Height="600"/>\
  </ObjectInfo>\
</DieCutLabel>\
';
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
