var employmentData = [
    { "date": "2008", "category": "Full time", "sectors": "Chemicals", "employees": 23602 },
    { "date": "2009", "category": "Full time", "sectors": "Chemicals", "employees": 22113 },
    { "date": "2010", "category": "Full time", "sectors": "Chemicals", "employees": 21667 },
    { "date": "2011", "category": "Full time", "sectors": "Chemicals", "employees": 21287 },
    { "date": "2012", "category": "Full time", "sectors": "Chemicals", "employees": 21688 },
    { "date": "2013", "category": "Full time", "sectors": "Chemicals", "employees": 22078 },
    { "date": "2014", "category": "Full time", "sectors": "Chemicals", "employees": 22301 },
    { "date": "2015", "category": "Full time", "sectors": "Chemicals", "employees": 24101 },
    { "date": "2016", "category": "Full time", "sectors": "Chemicals", "employees": 25535 },
    { "date": "2017", "category": "Full time", "sectors": "Chemicals", "employees": 26868 },
    { "date": "2008", "category": "Part time", "sectors": "Chemicals", "employees": 2369 },
    { "date": "2009", "category": "Part time", "sectors": "Chemicals", "employees": 2326 },
    { "date": "2010", "category": "Part time", "sectors": "Chemicals", "employees": 2686 },
    { "date": "2011", "category": "Part time", "sectors": "Chemicals", "employees": 3016 },
    { "date": "2012", "category": "Part time", "sectors": "Chemicals", "employees": 3051 },
    { "date": "2013", "category": "Part time", "sectors": "Chemicals", "employees": 3163 },
    { "date": "2014", "category": "Part time", "sectors": "Chemicals", "employees": 3323 },
    { "date": "2015", "category": "Part time", "sectors": "Chemicals", "employees": 3632 },
    { "date": "2016", "category": "Part time", "sectors": "Chemicals", "employees": 3940 },
    { "date": "2017", "category": "Part time", "sectors": "Chemicals", "employees": 4109 },
    { "date": "2008", "category": "Full time", "sectors": "Clothing", "employees": 1504 },
    { "date": "2009", "category": "Full time", "sectors": "Clothing", "employees": 1355 },
    { "date": "2010", "category": "Full time", "sectors": "Clothing", "employees": 1304 },
    { "date": "2011", "category": "Full time", "sectors": "Clothing", "employees": 1265 },
    { "date": "2012", "category": "Full time", "sectors": "Clothing", "employees": 1213 },
    { "date": "2013", "category": "Full time", "sectors": "Clothing", "employees": 1226 },
    { "date": "2014", "category": "Full time", "sectors": "Clothing", "employees": 1163 },
    { "date": "2015", "category": "Full time", "sectors": "Clothing", "employees": 1193 },
    { "date": "2016", "category": "Full time", "sectors": "Clothing", "employees": 1200 },
    { "date": "2017", "category": "Full time", "sectors": "Clothing", "employees": 1221 },
    { "date": "2008", "category": "Part time", "sectors": "Clothing", "employees": 312 },
    { "date": "2009", "category": "Part time", "sectors": "Clothing", "employees": 384 },
    { "date": "2010", "category": "Part time", "sectors": "Clothing", "employees": 332 },
    { "date": "2011", "category": "Part time", "sectors": "Clothing", "employees": 336 },
    { "date": "2012", "category": "Part time", "sectors": "Clothing", "employees": 312 },
    { "date": "2013", "category": "Part time", "sectors": "Clothing", "employees": 268 },
    { "date": "2014", "category": "Part time", "sectors": "Clothing", "employees": 292 },
    { "date": "2015", "category": "Part time", "sectors": "Clothing", "employees": 282 },
    { "date": "2016", "category": "Part time", "sectors": "Clothing", "employees": 275 },
    { "date": "2017", "category": "Part time", "sectors": "Clothing", "employees": 290 },
    { "date": "2008", "category": "Full time", "sectors": "Electronic Eqp.", "employees": 20259 },
    { "date": "2009", "category": "Full time", "sectors": "Electronic Eqp.", "employees": 18239 },
    { "date": "2010", "category": "Full time", "sectors": "Electronic Eqp.", "employees": 17455 },
    { "date": "2011", "category": "Full time", "sectors": "Electronic Eqp.", "employees": 17351 },
    { "date": "2012", "category": "Full time", "sectors": "Electronic Eqp.", "employees": 17995 },
    { "date": "2013", "category": "Full time", "sectors": "Electronic Eqp.", "employees": 18823 },
    { "date": "2014", "category": "Full time", "sectors": "Electronic Eqp.", "employees": 19884 },
    { "date": "2015", "category": "Full time", "sectors": "Electronic Eqp.", "employees": 22038 },
    { "date": "2016", "category": "Full time", "sectors": "Electronic Eqp.", "employees": 22494 },
    { "date": "2017", "category": "Full time", "sectors": "Electronic Eqp.", "employees": 22382 },
    { "date": "2008", "category": "Part time", "sectors": "Electronic Eqp.", "employees": 1953 },
    { "date": "2009", "category": "Part time", "sectors": "Electronic Eqp.", "employees": 1218 },
    { "date": "2010", "category": "Part time", "sectors": "Electronic Eqp.", "employees": 2008 },
    { "date": "2011", "category": "Part time", "sectors": "Electronic Eqp.", "employees": 2107 },
    { "date": "2012", "category": "Part time", "sectors": "Electronic Eqp.", "employees": 1865 },
    { "date": "2013", "category": "Part time", "sectors": "Electronic Eqp.", "employees": 2030 },
    { "date": "2014", "category": "Part time", "sectors": "Electronic Eqp.", "employees": 2017 },
    { "date": "2015", "category": "Part time", "sectors": "Electronic Eqp.", "employees": 2336 },
    { "date": "2016", "category": "Part time", "sectors": "Electronic Eqp.", "employees": 1884 },
    { "date": "2017", "category": "Part time", "sectors": "Electronic Eqp.", "employees": 1778 },
    { "date": "2008", "category": "Full time", "sectors": "C/E/W/W", "employees": 14222 },
    { "date": "2009", "category": "Full time", "sectors": "C/E/W/W", "employees": 12077 },
    { "date": "2010", "category": "Full time", "sectors": "C/E/W/W", "employees": 10678 },
    { "date": "2011", "category": "Full time", "sectors": "C/E/W/W", "employees": 10095 },
    { "date": "2012", "category": "Full time", "sectors": "C/E/W/W", "employees": 10407 },
    { "date": "2013", "category": "Full time", "sectors": "C/E/W/W", "employees": 10585 },
    { "date": "2014", "category": "Full time", "sectors": "C/E/W/W", "employees": 10354 },
    { "date": "2015", "category": "Full time", "sectors": "C/E/W/W", "employees": 12003 },
    { "date": "2016", "category": "Full time", "sectors": "C/E/W/W", "employees": 13404 },
    { "date": "2017", "category": "Full time", "sectors": "C/E/W/W", "employees": 14825 },
    { "date": "2008", "category": "Part time", "sectors": "C/E/W/W", "employees": 364 },
    { "date": "2009", "category": "Part time", "sectors": "C/E/W/W", "employees": 453 },
    { "date": "2010", "category": "Part time", "sectors": "C/E/W/W", "employees": 595 },
    { "date": "2011", "category": "Part time", "sectors": "C/E/W/W", "employees": 567 },
    { "date": "2012", "category": "Part time", "sectors": "C/E/W/W", "employees": 587 },
    { "date": "2013", "category": "Part time", "sectors": "C/E/W/W", "employees": 953 },
    { "date": "2014", "category": "Part time", "sectors": "C/E/W/W", "employees": 1115 },
    { "date": "2015", "category": "Part time", "sectors": "C/E/W/W", "employees": 749 },
    { "date": "2016", "category": "Part time", "sectors": "C/E/W/W", "employees": 870 },
    { "date": "2017", "category": "Part time", "sectors": "C/E/W/W", "employees": 1006 },
    { "date": "2008", "category": "Full time", "sectors": "Tobacco/Drinks", "employees": 5974 },
    { "date": "2009", "category": "Full time", "sectors": "Tobacco/Drinks", "employees": 5753 },
    { "date": "2010", "category": "Full time", "sectors": "Tobacco/Drinks", "employees": 5166 },
    { "date": "2011", "category": "Full time", "sectors": "Tobacco/Drinks", "employees": 4804 },
    { "date": "2012", "category": "Full time", "sectors": "Tobacco/Drinks", "employees": 4763 },
    { "date": "2013", "category": "Full time", "sectors": "Tobacco/Drinks", "employees": 4307 },
    { "date": "2014", "category": "Full time", "sectors": "Tobacco/Drinks", "employees": 4050 },
    { "date": "2015", "category": "Full time", "sectors": "Tobacco/Drinks", "employees": 4015 },
    { "date": "2016", "category": "Full time", "sectors": "Tobacco/Drinks", "employees": 3713 },
    { "date": "2017", "category": "Full time", "sectors": "Tobacco/Drinks", "employees": 3737 },
    { "date": "2008", "category": "Part time", "sectors": "Tobacco/Drinks", "employees": 641 },
    { "date": "2009", "category": "Part time", "sectors": "Tobacco/Drinks", "employees": 895 },
    { "date": "2010", "category": "Part time", "sectors": "Tobacco/Drinks", "employees": 947 },
    { "date": "2011", "category": "Part time", "sectors": "Tobacco/Drinks", "employees": 495 },
    { "date": "2012", "category": "Part time", "sectors": "Tobacco/Drinks", "employees": 287 },
    { "date": "2013", "category": "Part time", "sectors": "Tobacco/Drinks", "employees": 363 },
    { "date": "2014", "category": "Part time", "sectors": "Tobacco/Drinks", "employees": 398 },
    { "date": "2015", "category": "Part time", "sectors": "Tobacco/Drinks", "employees": 404 },
    { "date": "2016", "category": "Part time", "sectors": "Tobacco/Drinks", "employees": 361 },
    { "date": "2017", "category": "Part time", "sectors": "Tobacco/Drinks", "employees": 422 },
    { "date": "2008", "category": "Full time", "sectors": "Food", "employees": 39052 },
    { "date": "2009", "category": "Full time", "sectors": "Food", "employees": 36894 },
    { "date": "2010", "category": "Full time", "sectors": "Food", "employees": 37020 },
    { "date": "2011", "category": "Full time", "sectors": "Food", "employees": 37274 },
    { "date": "2012", "category": "Full time", "sectors": "Food", "employees": 38371 },
    { "date": "2013", "category": "Full time", "sectors": "Food", "employees": 38736 },
    { "date": "2014", "category": "Full time", "sectors": "Food", "employees": 40549 },
    { "date": "2015", "category": "Full time", "sectors": "Food", "employees": 42346 },
    { "date": "2016", "category": "Full time", "sectors": "Food", "employees": 43361 },
    { "date": "2017", "category": "Full time", "sectors": "Food", "employees": 45341 },
    { "date": "2008", "category": "Part time", "sectors": "Food", "employees": 3553 },
    { "date": "2009", "category": "Part time", "sectors": "Food", "employees": 3667 },
    { "date": "2010", "category": "Part time", "sectors": "Food", "employees": 4113 },
    { "date": "2011", "category": "Part time", "sectors": "Food", "employees": 4459 },
    { "date": "2012", "category": "Part time", "sectors": "Food", "employees": 4568 },
    { "date": "2013", "category": "Part time", "sectors": "Food", "employees": 5418 },
    { "date": "2014", "category": "Part time", "sectors": "Food", "employees": 5642 },
    { "date": "2015", "category": "Part time", "sectors": "Food", "employees": 5791 },
    { "date": "2016", "category": "Part time", "sectors": "Food", "employees": 6191 },
    { "date": "2017", "category": "Part time", "sectors": "Food", "employees": 6379 },
    { "date": "2008", "category": "Full time", "sectors": "Medical Eqp.", "employees": 21037 },
    { "date": "2009", "category": "Full time", "sectors": "Medical Eqp.", "employees": 21506 },
    { "date": "2010", "category": "Full time", "sectors": "Medical Eqp.", "employees": 21535 },
    { "date": "2011", "category": "Full time", "sectors": "Medical Eqp.", "employees": 22027 },
    { "date": "2012", "category": "Full time", "sectors": "Medical Eqp.", "employees": 22486 },
    { "date": "2013", "category": "Full time", "sectors": "Medical Eqp.", "employees": 22519 },
    { "date": "2014", "category": "Full time", "sectors": "Medical Eqp.", "employees": 24071 },
    { "date": "2015", "category": "Full time", "sectors": "Medical Eqp.", "employees": 24065 },
    { "date": "2016", "category": "Full time", "sectors": "Medical Eqp.", "employees": 26513 },
    { "date": "2017", "category": "Full time", "sectors": "Medical Eqp.", "employees": 27642 },
    { "date": "2008", "category": "Part time", "sectors": "Medical Eqp.", "employees": 2645 },
    { "date": "2009", "category": "Part time", "sectors": "Medical Eqp.", "employees": 2426 },
    { "date": "2010", "category": "Part time", "sectors": "Medical Eqp.", "employees": 2299 },
    { "date": "2011", "category": "Part time", "sectors": "Medical Eqp.", "employees": 3157 },
    { "date": "2012", "category": "Part time", "sectors": "Medical Eqp.", "employees": 3648 },
    { "date": "2013", "category": "Part time", "sectors": "Medical Eqp.", "employees": 3832 },
    { "date": "2014", "category": "Part time", "sectors": "Medical Eqp.", "employees": 3484 },
    { "date": "2015", "category": "Part time", "sectors": "Medical Eqp.", "employees": 3928 },
    { "date": "2016", "category": "Part time", "sectors": "Medical Eqp.", "employees": 3566 },
    { "date": "2017", "category": "Part time", "sectors": "Medical Eqp.", "employees": 4024 },
    { "date": "2008", "category": "Full time", "sectors": "Coding", "employees": 18745 },
    { "date": "2009", "category": "Full time", "sectors": "Coding", "employees": 17581 },
    { "date": "2010", "category": "Full time", "sectors": "Coding", "employees": 17956 },
    { "date": "2011", "category": "Full time", "sectors": "Coding", "employees": 19910 },
    { "date": "2012", "category": "Full time", "sectors": "Coding", "employees": 21891 },
    { "date": "2013", "category": "Full time", "sectors": "Coding", "employees": 23060 },
    { "date": "2014", "category": "Full time", "sectors": "Coding", "employees": 24570 },
    { "date": "2015", "category": "Full time", "sectors": "Coding", "employees": 26256 },
    { "date": "2016", "category": "Full time", "sectors": "Coding", "employees": 28381 },
    { "date": "2017", "category": "Full time", "sectors": "Coding", "employees": 29958 },
    { "date": "2008", "category": "Part time", "sectors": "Coding", "employees": 2790 },
    { "date": "2009", "category": "Part time", "sectors": "Coding", "employees": 2663 },
    { "date": "2010", "category": "Part time", "sectors": "Coding", "employees": 2987 },
    { "date": "2011", "category": "Part time", "sectors": "Coding", "employees": 2306 },
    { "date": "2012", "category": "Part time", "sectors": "Coding", "employees": 2755 },
    { "date": "2013", "category": "Part time", "sectors": "Coding", "employees": 3096 },
    { "date": "2014", "category": "Part time", "sectors": "Coding", "employees": 2396 },
    { "date": "2015", "category": "Part time", "sectors": "Coding", "employees": 2317 },
    { "date": "2016", "category": "Part time", "sectors": "Coding", "employees": 2138 },
    { "date": "2017", "category": "Part time", "sectors": "Coding", "employees": 1599 },
    { "date": "2008", "category": "Full time", "sectors": "Finance", "employees": 20464 },
    { "date": "2009", "category": "Full time", "sectors": "Finance", "employees": 19527 },
    { "date": "2010", "category": "Full time", "sectors": "Finance", "employees": 19599 },
    { "date": "2011", "category": "Full time", "sectors": "Finance", "employees": 20446 },
    { "date": "2012", "category": "Full time", "sectors": "Finance", "employees": 20911 },
    { "date": "2013", "category": "Full time", "sectors": "Finance", "employees": 21504 },
    { "date": "2014", "category": "Full time", "sectors": "Finance", "employees": 23016 },
    { "date": "2015", "category": "Full time", "sectors": "Finance", "employees": 24693 },
    { "date": "2016", "category": "Full time", "sectors": "Finance", "employees": 26580 },
    { "date": "2017", "category": "Full time", "sectors": "Finance", "employees": 28349 },
    { "date": "2008", "category": "Part time", "sectors": "Finance", "employees": 1330 },
    { "date": "2009", "category": "Part time", "sectors": "Finance", "employees": 1311 },
    { "date": "2010", "category": "Part time", "sectors": "Finance", "employees": 1566 },
    { "date": "2011", "category": "Part time", "sectors": "Finance", "employees": 1688 },
    { "date": "2012", "category": "Part time", "sectors": "Finance", "employees": 1511 },
    { "date": "2013", "category": "Part time", "sectors": "Finance", "employees": 1631 },
    { "date": "2014", "category": "Part time", "sectors": "Finance", "employees": 1854 },
    { "date": "2015", "category": "Part time", "sectors": "Finance", "employees": 2220 },
    { "date": "2016", "category": "Part time", "sectors": "Finance", "employees": 2342 },
    { "date": "2017", "category": "Part time", "sectors": "Finance", "employees": 2062 },
];




queue()
    .await(makeGraphs);
function makeGraphs() {
    var ndx = crossfilter(employmentData);

    showTypeSelector(ndx);

    showEmploymentData(ndx);

    showEmploymentDistribution(ndx);

    composite(ndx);



    dc.renderAll();
};


function showTypeSelector(ndx) {
    date_dim = ndx.dimension(dc.pluck("date"));
    employmentByYear = date_dim.group();

    dc.selectMenu("#typeSelector")
        .dimension(date_dim)
        .group(employmentByYear);
};

function showEmploymentData(ndx) {
    var sectors_dim = ndx.dimension(dc.pluck("sectors"));
    var employmentSector = sectors_dim.group().reduceSum(dc.pluck("employees"));

    dc.barChart("#employmentSector")
        .width(700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 40, left: 50 })
        .dimension(sectors_dim)
        .group(employmentSector)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .colors(['darkorange'])
        .xAxisLabel("Sectors")
        .yAxis().ticks(7)

};


function showEmploymentDistribution(ndx) {
    var category_dim = ndx.dimension(dc.pluck("category"));
    var employmentType = category_dim.group().reduceSum(dc.pluck("employees"));

    dc.pieChart("#sectorShare")
        .height(400)
        .innerRadius(70)
        .dimension(category_dim)
        .group(employmentType)
        .transitionDuration(1500)
        .legend(dc.legend())
};




function composite(ndx) {
    var parseDate = d3.time.format("%Y").parse;
    employmentData.forEach(function (d) {
        d.date = parseDate(d.date);
    });
    var date_dim = ndx.dimension(dc.pluck('date'));
    var minDate = date_dim.bottom(1)[0].date;
    var maxDate = date_dim.top(1)[0].date;
    function employmentComposite(sectors) {
        return function (d) {
            if (d.sectors === sectors) {
                return +d.employees;
            } else {
                return 0;
            }
        }
    }
    var chemEmployeesbyYear = date_dim.group().reduceSum(employmentComposite('Chemicals'));
    var clothEmployeesbyYear = date_dim.group().reduceSum(employmentComposite('Clothing'));
    var elecEmployeesbyYear = date_dim.group().reduceSum(employmentComposite('Electronic Eqp.'));
    var cewwEmployeesbyYear = date_dim.group().reduceSum(employmentComposite('C/E/W/W'));
    var tobaccoEmployeesbyYear = date_dim.group().reduceSum(employmentComposite('Tobacco/Drinks'));
    var foodEmployeesbyYear = date_dim.group().reduceSum(employmentComposite('Food'));
    var medEmployeesbyYear = date_dim.group().reduceSum(employmentComposite('Medical Eqp.'));
    var codeEmployeesbyYear = date_dim.group().reduceSum(employmentComposite('Coding'));
    var financeEmployeesbyYear = date_dim.group().reduceSum(employmentComposite('Finance'));

    var compositeChart = dc.compositeChart('#composite-chart');
    compositeChart
        .width(600)
        .height(350)
        .margins({ top: 30, right: 50, bottom: 30, left: 50 })
        .dimension(date_dim)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .yAxisLabel("Employment")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
                .colors('green')
                .group(chemEmployeesbyYear, 'Chemicals'),
            dc.lineChart(compositeChart)
                .colors('red')
                .group(clothEmployeesbyYear, 'Clothing'),
            dc.lineChart(compositeChart)
                .colors('yellow')
                .group(elecEmployeesbyYear, 'Electronic Eqp.'),
            dc.lineChart(compositeChart)
                .colors('orange')
                .group(cewwEmployeesbyYear, 'C/E/W/W'),
            dc.lineChart(compositeChart)
                .colors('blue')
                .group(tobaccoEmployeesbyYear, 'Tobacco/Drinks'),
            dc.lineChart(compositeChart)
                .colors('purple')
                .group(foodEmployeesbyYear, 'Food'),
            dc.lineChart(compositeChart)
                .colors('grey')
                .group(medEmployeesbyYear, 'Medical Eqp.'),
            dc.lineChart(compositeChart)
                .colors('darkslategrey')
                .group(codeEmployeesbyYear, 'Coding'),
            dc.lineChart(compositeChart)
                .colors('brown')
                .group(financeEmployeesbyYear, 'Finance'),
        ])
        .brushOn(false)
};
