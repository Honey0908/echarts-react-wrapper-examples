import {
    BumpChart,
    ClickableColumnChart,
    StackedBarWithBorderRadius,
    WaterFallChart,
    BasicLineChart,
    ClickToAddPoints,
    DataTransformFilter,
    NightingaleChart,
    ClusteringProcess,
    OHLCChart,
    dataTransFormFilterLoader,
    DiscreteMappingOfColor,
    GEOBeefCuts,
    HideOverLappedLabel,
    TransitionBetweenTreeMapAndSunburst,
    // BusLinesOfBeijing,
    RadialTree,
    BookRecords,
    ParallelNutrients,
    GradientEdge,
    RingGauge,
    Home
} from "./pages";
import RootLayout from "./pages/RootLayout";
import { OHLCChartLoader } from "./pages/charts/candleStick/OHLCChart";
import { GEOBeefCutsloader } from "./pages/charts/geo-map/GEOBeefCuts";
import { hideOverLappedLabelLoader } from "./pages/charts/graph/HideOverLappedLabel";
import { parallelNutrientsLoader } from "./pages/charts/parallel/ParallelNutrients";
import { gradientEdgeLodaer } from "./pages/charts/sankey/GradientEdge";
// import  { busLinesOfBeijingLoader } from "./pages/charts/lines/BusLinesOfBeijing";
import { RadialTreeLoader } from "./pages/charts/tree/RadialTree";
import { TransitionBetweenTreeMapAndSunburstLoader } from "./pages/charts/treeMap/TransitionBetweenTreeMap&Sunburst";

export const routes = [
    {
        path: "/",
        element: <RootLayout />,
        name: "Home",
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ]
    },
    {
        path: "/line",
        element: <RootLayout />,
        name: "Line",
        children: [
            {
                path: '/line/basic-line-chart',
                element: <BasicLineChart />,
                name: "Basic Line Chart"
            },
            {
                path: '/line/bump-chart',
                element: <BumpChart />,
                name: "Bump Chart"
            },
            {
                path: '/line/data-transform-filter',
                element: <DataTransformFilter />,
                name: "Data Transform Filter",
                loader: dataTransFormFilterLoader
            },
            {
                path: '/line/click-to-add-points',
                element: <ClickToAddPoints />,
                name: "Click To Add Points",
            },
        ]
    },
    {
        path: "/bar",
        element: <RootLayout />,
        name: "Bar",
        children: [
            {
                path: '/bar/waterfall-chart',
                element: <WaterFallChart />,
                name: "Waterfall Chart"
            },
            {
                path: '/bar/clickable-column-chart',
                element: <ClickableColumnChart />,
                name: "clickable column Chart"
            },
            {
                path: '/bar/stacked-bar-with-border-radius',
                element: <StackedBarWithBorderRadius />,
                name: "Stacked Bar With Border Radius"
            }
        ]
    },
    {
        path: "/pie",
        element: <RootLayout />,
        name: "Pie",
        children: [
            {
                path: '/pie/nightingale-chart',
                element: <NightingaleChart />,
                name: "Nightingale Chart"
            }
        ]
    },
    {
        path: "/scatter",
        element: <RootLayout />,
        name: "Scatter",
        children: [
            {
                path: '/scatter/clustering-process',
                element: <ClusteringProcess />,
                name: "Clustering Process"
            }
        ]
    },
    {
        path: "/geo-map",
        element: <RootLayout />,
        name: "GEO/Map",
        children: [
            {
                path: '/geo-map/geo-beef-cuts',
                element: < GEOBeefCuts />,
                name: "GEO Beef Cuts",
                loader: GEOBeefCutsloader
            }
        ]
    },
    {
        path: "/candle-stick",
        element: <RootLayout />,
        name: "Candle Stick",
        children: [
            {
                path: '/candle-stick/OHLC-chart',
                element: < OHLCChart />,
                name: "OHLC Chart",
                loader: OHLCChartLoader
            }
        ]
    },
    {
        path: "/heat-map",
        element: <RootLayout />,
        name: "Heat Map",
        children: [
            {
                path: '/heat-map/discrete-mapping-of-color',
                element: < DiscreteMappingOfColor />,
                name: "Discrete Mapping Of Color",
            }
        ]
    },
    {
        path: "/graph",
        element: <RootLayout />,
        name: "Graph",
        children: [
            {
                path: '/graph/hide-overlapped-label',
                element: <HideOverLappedLabel />,
                name: "Hide OverLapped Label",
                loader: hideOverLappedLabelLoader
            }
        ]
    },
    // {
    //     path: "/lines",
    //     element: <RootLayout />,
    //     name: "Lines",
    //     children: [
    //         {
    //             path: '/lines/bus-lines-of-beijing',
    //             element: <BusLinesOfBeijing />,
    //             name: "Bus Lines Of Beijing",
    //             loader: busLinesOfBeijingLoader
    //         }
    //     ]
    // },
    {
        path: "/tree",
        element: <RootLayout />,
        name: "Tree",
        children: [
            {
                path: '/tree/radial-tree',
                element: <RadialTree />,
                name: "Radial Tree",
                loader: RadialTreeLoader
            }
        ]
    },
    {
        path: "/tree-map",
        element: <RootLayout />,
        name: "Tree Map",
        children: [
            {
                path: '/tree-map/transition-between-treeMap-and-sunBurst',
                element: <TransitionBetweenTreeMapAndSunburst />,
                name: "Transition Between TreeMap & SunBurst",
                loader: TransitionBetweenTreeMapAndSunburstLoader
            }
        ]
    },
    {
        path: "/sun-burst",
        element: <RootLayout />,
        name: "Sunburst",
        children: [
            {
                path: '/sun-burst/book-records',
                element: <BookRecords />,
                name: "book Records",
            }
        ]
    },
    {
        path: "/parallel",
        element: <RootLayout />,
        name: "Parallel",
        children: [
            {
                path: '/parallel/parallel-nutrients',
                element: <ParallelNutrients />,
                name: "parallel Nutrients",
                loader: parallelNutrientsLoader
            }
        ]
    },
    {
        path: "/sankey",
        element: <RootLayout />,
        name: "Sankey",
        children: [
            {
                path: '/sankey/gradient-edge',
                element: <GradientEdge />,
                name: "Gradient Edge",
                loader: gradientEdgeLodaer
            }
        ]
    },
    {
        path: "/guage",
        element: <RootLayout />,
        name: "Guage",
        children: [
            {
                path: '/guage/ring-guage',
                element: <RingGauge />,
                name: "Ring Guage",
            }
        ]
    },
];