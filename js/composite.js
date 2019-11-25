var employmentData = [
    {"date": "2008", "Category": "Full time", "Sectors": "Chemicals", "Employees": 23602},
    {"date": "2009", "Category": "Full time", "Sectors": "Chemicals", "Employees": 22113},
    {"date": "2010", "Category": "Full time", "Sectors": "Chemicals", "Employees": 21667},
    {"date": "2011", "Category": "Full time", "Sectors": "Chemicals", "Employees": 21287},
    {"date": "2012", "Category": "Full time", "Sectors": "Chemicals", "Employees": 21688},
    {"date": "2013", "Category": "Full time", "Sectors": "Chemicals", "Employees": 22078},
    {"date": "2014", "Category": "Full time", "Sectors": "Chemicals", "Employees": 22301},
    {"date": "2015", "Category": "Full time", "Sectors": "Chemicals", "Employees": 24101},
    {"date": "2016", "Category": "Full time", "Sectors": "Chemicals", "Employees": 25535},
    {"date": "2017", "Category": "Full time", "Sectors": "Chemicals", "Employees": 26868},
    {"date": "2008", "Category": "Part time", "Sectors": "Chemicals", "Employees": 2369},
    {"date": "2009", "Category": "Part time", "Sectors": "Chemicals", "Employees": 2326},
    {"date": "2010", "Category": "Part time", "Sectors": "Chemicals", "Employees": 2686},
    {"date": "2011", "Category": "Part time", "Sectors": "Chemicals", "Employees": 3016},
    {"date": "2012", "Category": "Part time", "Sectors": "Chemicals", "Employees": 3051},
    {"date": "2013", "Category": "Part time", "Sectors": "Chemicals", "Employees": 3163},
    {"date": "2014", "Category": "Part time", "Sectors": "Chemicals", "Employees": 3323},
    {"date": "2015", "Category": "Part time", "Sectors": "Chemicals", "Employees": 3632},
    {"date": "2016", "Category": "Part time", "Sectors": "Chemicals", "Employees": 3940},
    {"date": "2017", "Category": "Part time", "Sectors": "Chemicals", "Employees": 4109},
    {"date": "2008", "Category": "Full time", "Sectors": "Clothing", "Employees": 1504},
    {"date": "2009", "Category": "Full time", "Sectors": "Clothing", "Employees": 1355},
    {"date": "2010", "Category": "Full time", "Sectors": "Clothing", "Employees": 1304},
    {"date": "2011", "Category": "Full time", "Sectors": "Clothing", "Employees": 1265},
    {"date": "2012", "Category": "Full time", "Sectors": "Clothing", "Employees": 1213},
    {"date": "2013", "Category": "Full time", "Sectors": "Clothing", "Employees": 1226},
    {"date": "2014", "Category": "Full time", "Sectors": "Clothing", "Employees": 1163},
    {"date": "2015", "Category": "Full time", "Sectors": "Clothing", "Employees": 1193},
    {"date": "2016", "Category": "Full time", "Sectors": "Clothing", "Employees": 1200},
    {"date": "2017", "Category": "Full time", "Sectors": "Clothing", "Employees": 1221},
    {"date": "2008", "Category": "Part time", "Sectors": "Clothing", "Employees": 312},
    {"date": "2009", "Category": "Part time", "Sectors": "Clothing", "Employees": 384},
    {"date": "2010", "Category": "Part time", "Sectors": "Clothing", "Employees": 332},
    {"date": "2011", "Category": "Part time", "Sectors": "Clothing", "Employees": 336},
    {"date": "2012", "Category": "Part time", "Sectors": "Clothing", "Employees": 312},
    {"date": "2013", "Category": "Part time", "Sectors": "Clothing", "Employees": 268},
    {"date": "2014", "Category": "Part time", "Sectors": "Clothing", "Employees": 292},
    {"date": "2015", "Category": "Part time", "Sectors": "Clothing", "Employees": 282},
    {"date": "2016", "Category": "Part time", "Sectors": "Clothing", "Employees": 275},
    {"date": "2017", "Category": "Part time", "Sectors": "Clothing", "Employees": 290},
    {"date": "2008", "Category": "Full time", "Sectors": "Electronic Eqp.", "Employees": 20259},
    {"date": "2009", "Category": "Full time", "Sectors": "Electronic Eqp.", "Employees": 18239},
    {"date": "2010", "Category": "Full time", "Sectors": "Electronic Eqp.", "Employees": 17455},
    {"date": "2011", "Category": "Full time", "Sectors": "Electronic Eqp.", "Employees": 17351},
    {"date": "2012", "Category": "Full time", "Sectors": "Electronic Eqp.", "Employees": 17995},
    {"date": "2013", "Category": "Full time", "Sectors": "Electronic Eqp.", "Employees": 18823},
    {"date": "2014", "Category": "Full time", "Sectors": "Electronic Eqp.", "Employees": 19884},
    {"date": "2015", "Category": "Full time", "Sectors": "Electronic Eqp.", "Employees": 22038},
    {"date": "2016", "Category": "Full time", "Sectors": "Electronic Eqp.", "Employees": 22494},
    {"date": "2017", "Category": "Full time", "Sectors": "Electronic Eqp.", "Employees": 22382},
    {"date": "2008", "Category": "Part time", "Sectors": "Electronic Eqp.", "Employees": 1953},
    {"date": "2009", "Category": "Part time", "Sectors": "Electronic Eqp.", "Employees": 1218},
    {"date": "2010", "Category": "Part time", "Sectors": "Electronic Eqp.", "Employees": 2008},
    {"date": "2011", "Category": "Part time", "Sectors": "Electronic Eqp.", "Employees": 2107},
    {"date": "2012", "Category": "Part time", "Sectors": "Electronic Eqp.", "Employees": 1865},
    {"date": "2013", "Category": "Part time", "Sectors": "Electronic Eqp.", "Employees": 2030},
    {"date": "2014", "Category": "Part time", "Sectors": "Electronic Eqp.", "Employees": 2017},
    {"date": "2015", "Category": "Part time", "Sectors": "Electronic Eqp.", "Employees": 2336},
    {"date": "2016", "Category": "Part time", "Sectors": "Electronic Eqp.", "Employees": 1884},
    {"date": "2017", "Category": "Part time", "Sectors": "Electronic Eqp.", "Employees": 1778},
    {"date": "2008", "Category": "Full time", "Sectors": "C/E/W/W", "Employees": 14222},
    {"date": "2009", "Category": "Full time", "Sectors": "C/E/W/W", "Employees": 12077},
    {"date": "2010", "Category": "Full time", "Sectors": "C/E/W/W", "Employees": 10678},
    {"date": "2011", "Category": "Full time", "Sectors": "C/E/W/W", "Employees": 10095},
    {"date": "2012", "Category": "Full time", "Sectors": "C/E/W/W", "Employees": 10407},
    {"date": "2013", "Category": "Full time", "Sectors": "C/E/W/W", "Employees": 10585},
    {"date": "2014", "Category": "Full time", "Sectors": "C/E/W/W", "Employees": 10354},
    {"date": "2015", "Category": "Full time", "Sectors": "C/E/W/W", "Employees": 12003},
    {"date": "2016", "Category": "Full time", "Sectors": "C/E/W/W", "Employees": 13404},
    {"date": "2017", "Category": "Full time", "Sectors": "C/E/W/W", "Employees": 14825},
    {"date": "2008", "Category": "Part time", "Sectors": "C/E/W/W", "Employees": 364},
    {"date": "2009", "Category": "Part time", "Sectors": "C/E/W/W", "Employees": 453},
    {"date": "2010", "Category": "Part time", "Sectors": "C/E/W/W", "Employees": 595},
    {"date": "2011", "Category": "Part time", "Sectors": "C/E/W/W", "Employees": 567},
    {"date": "2012", "Category": "Part time", "Sectors": "C/E/W/W", "Employees": 587},
    {"date": "2013", "Category": "Part time", "Sectors": "C/E/W/W", "Employees": 953},
    {"date": "2014", "Category": "Part time", "Sectors": "C/E/W/W", "Employees": 1115},
    {"date": "2015", "Category": "Part time", "Sectors": "C/E/W/W", "Employees": 749},
    {"date": "2016", "Category": "Part time", "Sectors": "C/E/W/W", "Employees": 870},
    {"date": "2017", "Category": "Part time", "Sectors": "C/E/W/W", "Employees": 1006},
    {"date": "2008", "Category": "Full time", "Sectors": "Tobacco/Drinks", "Employees": 5974},
    {"date": "2009", "Category": "Full time", "Sectors": "Tobacco/Drinks", "Employees": 5753},
    {"date": "2010", "Category": "Full time", "Sectors": "Tobacco/Drinks", "Employees": 5166},
    {"date": "2011", "Category": "Full time", "Sectors": "Tobacco/Drinks", "Employees": 4804},
    {"date": "2012", "Category": "Full time", "Sectors": "Tobacco/Drinks", "Employees": 4763},
    {"date": "2013", "Category": "Full time", "Sectors": "Tobacco/Drinks", "Employees": 4307},
    {"date": "2014", "Category": "Full time", "Sectors": "Tobacco/Drinks", "Employees": 4050},
    {"date": "2015", "Category": "Full time", "Sectors": "Tobacco/Drinks", "Employees": 4015},
    {"date": "2016", "Category": "Full time", "Sectors": "Tobacco/Drinks", "Employees": 3713},
    {"date": "2017", "Category": "Full time", "Sectors": "Tobacco/Drinks", "Employees": 3737},
    {"date": "2008", "Category": "Part time", "Sectors": "Tobacco/Drinks", "Employees": 641},
    {"date": "2009", "Category": "Part time", "Sectors": "Tobacco/Drinks", "Employees": 895},
    {"date": "2010", "Category": "Part time", "Sectors": "Tobacco/Drinks", "Employees": 947},
    {"date": "2011", "Category": "Part time", "Sectors": "Tobacco/Drinks", "Employees": 495},
    {"date": "2012", "Category": "Part time", "Sectors": "Tobacco/Drinks", "Employees": 287},
    {"date": "2013", "Category": "Part time", "Sectors": "Tobacco/Drinks", "Employees": 363},
    {"date": "2014", "Category": "Part time", "Sectors": "Tobacco/Drinks", "Employees": 398},
    {"date": "2015", "Category": "Part time", "Sectors": "Tobacco/Drinks", "Employees": 404},
    {"date": "2016", "Category": "Part time", "Sectors": "Tobacco/Drinks", "Employees": 361},
    {"date": "2017", "Category": "Part time", "Sectors": "Tobacco/Drinks", "Employees": 422},
    {"date": "2008", "Category": "Full time", "Sectors": "Food", "Employees": 39052},
    {"date": "2009", "Category": "Full time", "Sectors": "Food", "Employees": 36894},
    {"date": "2010", "Category": "Full time", "Sectors": "Food", "Employees": 37020},
    {"date": "2011", "Category": "Full time", "Sectors": "Food", "Employees": 37274},
    {"date": "2012", "Category": "Full time", "Sectors": "Food", "Employees": 38371},
    {"date": "2013", "Category": "Full time", "Sectors": "Food", "Employees": 38736},
    {"date": "2014", "Category": "Full time", "Sectors": "Food", "Employees": 40549},
    {"date": "2015", "Category": "Full time", "Sectors": "Food", "Employees": 42346},
    {"date": "2016", "Category": "Full time", "Sectors": "Food", "Employees": 43361},
    {"date": "2017", "Category": "Full time", "Sectors": "Food", "Employees": 45341},
    {"date": "2008", "Category": "Part time", "Sectors": "Food", "Employees": 3553},
    {"date": "2009", "Category": "Part time", "Sectors": "Food", "Employees": 3667},
    {"date": "2010", "Category": "Part time", "Sectors": "Food", "Employees": 4113},
    {"date": "2011", "Category": "Part time", "Sectors": "Food", "Employees": 4459},
    {"date": "2012", "Category": "Part time", "Sectors": "Food", "Employees": 4568},
    {"date": "2013", "Category": "Part time", "Sectors": "Food", "Employees": 5418},
    {"date": "2014", "Category": "Part time", "Sectors": "Food", "Employees": 5642},
    {"date": "2015", "Category": "Part time", "Sectors": "Food", "Employees": 5791},
    {"date": "2016", "Category": "Part time", "Sectors": "Food", "Employees": 6191},
    {"date": "2017", "Category": "Part time", "Sectors": "Food", "Employees": 6379},
    {"date": "2008", "Category": "Full time", "Sectors": "Medical Eqp.", "Employees": 21037},
    {"date": "2009", "Category": "Full time", "Sectors": "Medical Eqp.", "Employees": 21506},
    {"date": "2010", "Category": "Full time", "Sectors": "Medical Eqp.", "Employees": 21535},
    {"date": "2011", "Category": "Full time", "Sectors": "Medical Eqp.", "Employees": 22027},
    {"date": "2012", "Category": "Full time", "Sectors": "Medical Eqp.", "Employees": 22486},
    {"date": "2013", "Category": "Full time", "Sectors": "Medical Eqp.", "Employees": 22519},
    {"date": "2014", "Category": "Full time", "Sectors": "Medical Eqp.", "Employees": 24071},
    {"date": "2015", "Category": "Full time", "Sectors": "Medical Eqp.", "Employees": 24065},
    {"date": "2016", "Category": "Full time", "Sectors": "Medical Eqp.", "Employees": 26513},
    {"date": "2017", "Category": "Full time", "Sectors": "Medical Eqp.", "Employees": 27642},
    {"date": "2008", "Category": "Part time", "Sectors": "Medical Eqp.", "Employees": 2645},
    {"date": "2009", "Category": "Part time", "Sectors": "Medical Eqp.", "Employees": 2426},
    {"date": "2010", "Category": "Part time", "Sectors": "Medical Eqp.", "Employees": 2299},
    {"date": "2011", "Category": "Part time", "Sectors": "Medical Eqp.", "Employees": 3157},
    {"date": "2012", "Category": "Part time", "Sectors": "Medical Eqp.", "Employees": 3648},
    {"date": "2013", "Category": "Part time", "Sectors": "Medical Eqp.", "Employees": 3832},
    {"date": "2014", "Category": "Part time", "Sectors": "Medical Eqp.", "Employees": 3484},
    {"date": "2015", "Category": "Part time", "Sectors": "Medical Eqp.", "Employees": 3928},
    {"date": "2016", "Category": "Part time", "Sectors": "Medical Eqp.", "Employees": 3566},
    {"date": "2017", "Category": "Part time", "Sectors": "Medical Eqp.", "Employees": 4024},
    {"date": "2008", "Category": "Full time", "Sectors": "Coding", "Employees": 18745},
    {"date": "2009", "Category": "Full time", "Sectors": "Coding", "Employees": 17581},
    {"date": "2010", "Category": "Full time", "Sectors": "Coding", "Employees": 17956},
    {"date": "2011", "Category": "Full time", "Sectors": "Coding", "Employees": 19910},
    {"date": "2012", "Category": "Full time", "Sectors": "Coding", "Employees": 21891},
    {"date": "2013", "Category": "Full time", "Sectors": "Coding", "Employees": 23060},
    {"date": "2014", "Category": "Full time", "Sectors": "Coding", "Employees": 24570},
    {"date": "2015", "Category": "Full time", "Sectors": "Coding", "Employees": 26256},
    {"date": "2016", "Category": "Full time", "Sectors": "Coding", "Employees": 28381},
    {"date": "2017", "Category": "Full time", "Sectors": "Coding", "Employees": 29958},
    {"date": "2008", "Category": "Part time", "Sectors": "Coding", "Employees": 2790},
    {"date": "2009", "Category": "Part time", "Sectors": "Coding", "Employees": 2663},
    {"date": "2010", "Category": "Part time", "Sectors": "Coding", "Employees": 2987},
    {"date": "2011", "Category": "Part time", "Sectors": "Coding", "Employees": 2306},
    {"date": "2012", "Category": "Part time", "Sectors": "Coding", "Employees": 2755},
    {"date": "2013", "Category": "Part time", "Sectors": "Coding", "Employees": 3096},
    {"date": "2014", "Category": "Part time", "Sectors": "Coding", "Employees": 2396},
    {"date": "2015", "Category": "Part time", "Sectors": "Coding", "Employees": 2317},
    {"date": "2016", "Category": "Part time", "Sectors": "Coding", "Employees": 2138},
    {"date": "2017", "Category": "Part time", "Sectors": "Coding", "Employees": 1599},
    {"date": "2008", "Category": "Full time", "Sectors": "Finance", "Employees": 20464},
    {"date": "2009", "Category": "Full time", "Sectors": "Finance", "Employees": 19527},
    {"date": "2010", "Category": "Full time", "Sectors": "Finance", "Employees": 19599},
    {"date": "2011", "Category": "Full time", "Sectors": "Finance", "Employees": 20446},
    {"date": "2012", "Category": "Full time", "Sectors": "Finance", "Employees": 20911},
    {"date": "2013", "Category": "Full time", "Sectors": "Finance", "Employees": 21504},
    {"date": "2014", "Category": "Full time", "Sectors": "Finance", "Employees": 23016},
    {"date": "2015", "Category": "Full time", "Sectors": "Finance", "Employees": 24693},
    {"date": "2016", "Category": "Full time", "Sectors": "Finance", "Employees": 26580},
    {"date": "2017", "Category": "Full time", "Sectors": "Finance", "Employees": 28349},
    {"date": "2008", "Category": "Part time", "Sectors": "Finance", "Employees": 1330},
    {"date": "2009", "Category": "Part time", "Sectors": "Finance", "Employees": 1311},
    {"date": "2010", "Category": "Part time", "Sectors": "Finance", "Employees": 1566},
    {"date": "2011", "Category": "Part time", "Sectors": "Finance", "Employees": 1688},
    {"date": "2012", "Category": "Part time", "Sectors": "Finance", "Employees": 1511},
    {"date": "2013", "Category": "Part time", "Sectors": "Finance", "Employees": 1631},
    {"date": "2014", "Category": "Part time", "Sectors": "Finance", "Employees": 1854},
    {"date": "2015", "Category": "Part time", "Sectors": "Finance", "Employees": 2220},
    {"date": "2016", "Category": "Part time", "Sectors": "Finance", "Employees": 2342},
    {"date": "2017", "Category": "Part time", "Sectors": "Finance", "Employees": 2062},
    ];


queue()
.await(makeGraphs);

function makeGraphs(){

    var ndx = crossfilter(employmentData);

    showTypeSelector(ndx);

    showEmploymentData(ndx);

    showEmploymentDistribution(ndx);

    employmentOverTime(ndx);


    dc.renderAll();

}

function showTypeSelector(ndx){
    year_dim = ndx.dimension(dc.pluck("date"));
    employmentByYear = year_dim.group();

    dc.selectMenu("#typeSelector")
    .dimension(year_dim)
    .group(employmentByYear);
}

function showEmploymentData(ndx){
    var sectors_dim = ndx.dimension(dc.pluck("Sectors"));
    var employmentSector = sectors_dim.group().reduceSum(dc.pluck("Employees"));

    dc.barChart("#employmentSector")
    .width(700)
    .height(300)
    .margins({top: 10, right: 50, bottom: 40, left: 50})
    .dimension(sectors_dim)
    .group(employmentSector)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel("Sectors")
    .yAxis().ticks(7)
    
};


function showEmploymentDistribution(ndx){
    var category_dim = ndx.dimension(dc.pluck("Category"));
    var employmentType = category_dim.group().reduceSum(dc.pluck("Employees"));

    dc.pieChart("#sectorShare")
    .height(400)
    .radius(140)
    .dimension(category_dim)
    .group(employmentType)
    .transitionDuration(1500)
};



function employmentOverTime(ndx) {
    
    var parseDate = d3.time.format("%Y").parse;
    employmentData.forEach(function (d) {
        d.date = parseDate(d.date);
    });

   var date_dim = ndx.dimension(dc.pluck("date"));
   var employmentverTime = date_dim.group().reduceSum(dc.pluck("Employees"));

   var minDate = date_dim.bottom(1)[0].date;
   var maxDate = date_dim.top(1)[0].date;

   dc.lineChart("#employmentOverTime")
   .height(300)
   .width(500)
   .margins({top: 10, right: 50, bottom: 30, left: 50})
   .dimension(date_dim)
   .group(employmentverTime)
   .transitionDuration(500)
   .x(d3.time.scale().domain([minDate, maxDate]))
   .xAxisLabel("Year")
   .yAxis().ticks(10);

};