$('#visitorMap').vectorMap({
  map: 'world_en',
  backgroundColor: '#ffffff',
  borderColor: '#f2f2f2',
  borderOpacity: 0.8,
  borderWidth: 1,
  hoverColor: '#000',
  hoverOpacity: 0.8,
  color: '#ddd',
  normalizeFunction: 'linear',
  selectedRegions: false,
  showTooltip: true,
  pins: {
    id: '<div className="jqvmap-circle"></div>',
    my: '<div className="jqvmap-circle"></div>',
    th: '<div className="jqvmap-circle"></div>',
    sy: '<div className="jqvmap-circle"></div>',
    eg: '<div className="jqvmap-circle"></div>',
    ae: '<div className="jqvmap-circle"></div>',
    nz: '<div className="jqvmap-circle"></div>',
    tl: '<div className="jqvmap-circle"></div>',
    ng: '<div className="jqvmap-circle"></div>',
    si: '<div className="jqvmap-circle"></div>',
    pa: '<div className="jqvmap-circle"></div>',
    au: '<div className="jqvmap-circle"></div>',
    ca: '<div className="jqvmap-circle"></div>',
    tr: '<div className="jqvmap-circle"></div>',
  },
  onRegionClick(element, code, region) {
    const opts = {
      title: 'Choosed',
      message: `You clicked "${
        region
      }" which has the code: ${
        code.toUpperCase()}`,
    };

    iziToast.info(opts);
  },
});
$('#visitorMap2').vectorMap({
  map: 'world_en',
  backgroundColor: '#ffffff',
  borderColor: '#f2f2f2',
  borderOpacity: 0.8,
  borderWidth: 1,
  hoverColor: '#000',
  hoverOpacity: 0.8,
  color: '#ddd',
  normalizeFunction: 'linear',
  selectedRegions: false,
  showTooltip: true,
  onRegionClick(element, code, region) {
    const message = `You clicked "${
      region
    }" which has the code: ${
      code.toUpperCase()}`;

    $('#flag-icon').removeClass((index, className) => (className.match(/(^|\s)flag-icon-\S+/g) || []).join(' '));
    $('#flag-icon').addClass(`flag-icon-${code}`);
  },
});
$('#visitorMap3').vectorMap({
  map: 'indonesia_id',
  backgroundColor: '#ffffff',
  borderColor: '#f2f2f2',
  borderOpacity: 0.8,
  borderWidth: 1,
  hoverColor: '#000',
  hoverOpacity: 0.8,
  color: '#ddd',
  normalizeFunction: 'linear',
  selectedRegions: false,
  showTooltip: true,
});
