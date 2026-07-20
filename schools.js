const schools = [
  {
    dise: "29041109431",
    name: "GOVT HPS URDU ABUB BAKAR COLONY",
    cluster: "ADARSHA NAGAR URDU",
    type: "HPS"
  },
  {
    dise: "29041108601",
    name: "GOVT HPS URDU ADARSH NAGAR",
    cluster: "ADARSHA NAGAR URDU",
    type: "HPS"
  },
  {
    dise: "29041109401",
    name: "GOVT HPS MAHIBOOBNAGAR GLB",
    cluster: "ADARSHA NAGAR URDU",
    type: "HPS"
  },
  {
    dise: "29041110404",
    name: "GOVT HPS URDU ITTEHAD COLONY",
    cluster: "ADARSHA NAGAR URDU",
    type: "HPS"
  },
  {
    dise: "29041107908",
    name: "GHS URDU SONIYA GANDHI CLNY M",
    cluster: "ADARSHA NAGAR URDU",
    type: "HS"
  },
  {
    dise: "29041107908",
    name: "GHPS URDU SONIYA GANDHI CLNY M",
    cluster: "ADARSHA NAGAR URDU",
    type: "HPS"
  },
  {
    dise: "29041104102",
    name: "GOVT HPS URDU KURIKOTA",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041105401",
    name: "GOVT LPS SIRADONE",
    cluster: "ANKALAGA",
    type: "LPS"
  },
  {
    dise: "29041101401",
    name: "GOVT HPS BHUSANAGI",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041103002",
    name: "GOVT HPS KAGGANAMADI",
    cluster: "ANKALAGA",
    type: "HPS"
  },
{
    dise: "29041105501",
    name: "GOVT LPS SIRAGAPUR",
    cluster: "ANKALAGA",
    type: "LPS"
  },
  {
    dise: "29041106502",
    name: "GOVT HPS YELAVANTAGI",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041100102",
    name: "GOVT HPS ANKALAGA",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041104101",
    name: "GOVT HPS KURIKOTA",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041100501",
    name: "GOVT HPS BABALAD (I.K",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041103501",
    name: "GHS KANNUR",
    cluster: "ANKALAGA",
    type: "HS"
  },
  {
    dise: "29041103501",
    name: "GOVT HPS KANNUR",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041108503",
    name: "GOVT HPS (KAN ASIF GUNJ",
    cluster: "ASIF GUNJ",
    type: "HPS"
  },
  {
    dise: "29041108514",
    name: "GOVT MPHS GULBARGA",
    cluster: "ASIF GUNJ",
    type: "HS"
  },
  {
    dise: "29041107703",
    name: "GOVT HPS AYYARWADI",
    cluster: "ASIF GUNJ",
    type: "HPS"
  },
{
    dise: "29041108413",
    name: "GOVT HS SHAHABAZAR",
    cluster: "ASIF GUNJ",
    type: "HS"
  },
  {
    dise: "29041108504",
    name: "GOVT HPS (MARATHI ASIF GUNJ",
    cluster: "ASIF GUNJ",
    type: "HPS"
  },
  {
    dise: "29041108414",
    name: "KGBV RESI SHAHABAZAR GLB",
    cluster: "ASIF GUNJ",
    type: "HPS"
  },
  {
    dise: "29041100401",
    name: "KPS GOVT HPS AURAD [B]",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041100103",
    name: "GOVT HPS ALGUD",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041101001",
    name: "GOVT HPS BELUR [J]",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041106101",
    name: "GOVT LPS TONDAKAL",
    cluster: "AURAB (B)",
    type: "LPS"
  },
  {
    dise: "29041100702",
    name: "GOVT LPS URDU SCHOOL BANNUR",
    cluster: "AURAB (B)",
    type: "LPS"
  },
  {
    dise: "29041106201",
    name: "GOVT HPS UPALAON",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041100402",
    name: "GOVT LPS URDU AVRADA ( B",
    cluster: "AURAB (B)",
    type: "LPS"
  },
{
    dise: "29041101002",
    name: "GOVT LPS BELUR J TANDA",
    cluster: "AURAB (B)",
    type: "LPS"
  },
  {
    dise: "29041100701",
    name: "GOVT HPS BANNUR",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041100403",
    name: "KPS GOVT HS AURAD (B",
    cluster: "AURAB (B)",
    type: "HS"
  },
  {
    dise: "29041106003",
    name: "GOVT HS TAVARGERA",
    cluster: "AURAB (B)",
    type: "HS"
  },
  {
    dise: "29041106001",
    name: "GOVT HPS TAVARAGERA",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041106002",
    name: "GOVT HS URDU TAVARAGERA",
    cluster: "AURAB (B)",
    type: "HS"
  },
  {
    dise: "29041106002",
    name: "GOVT HPS URDU TAVARAGERA",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041103201",
    name: "GOVT HPS KALAMANDARGI",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041101710",
    name: "GOVT LPS HODIHAL TANDA",
    cluster: "DONGARGAON",
    type: "LPS"
  },
  {
    dise: "29041101709",
    name: "GOVT LPS CHAPLA NAYAK TANDA (S.S",
    cluster: "DONGARGAON",
    type: "LPS"
  },
 {
    dise: "29041105003",
    name: "GOVT LPS NEELAKHED TANDA",
    cluster: "DONGARGAON",
    type: "LPS"
  },
  {
    dise: "29041103205",
    name: "GOVT LPS. BANDANKERA TANDA (S.S",
    cluster: "DONGARGAON",
    type: "LPS"
  },
  {
    dise: "29041101601",
    name: "GOVT HPS DOHRJAMGA",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041101701",
    name: "GOVT MPS DONGARGAON",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041107201",
    name: "GOVT HPS KINNROAD",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041103206",
    name: "GOVT HPS GUTTI TANADA",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041101901",
    name: "GOVT HPS GOBBURWADI",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041105002",
    name: "GOVT HPS NEELAKHED",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041101711",
    name: "GOVT HS DONGARGAON",
    cluster: "DONGARGAON",
    type: "HS"
  },
  {
    dise: "29041102302",
    name: "GOVT HPS GIRLS HARSOOR",
    cluster: "HARSOOR",
    type: "HPS"
  },
 {
    dise: "29041102602",
    name: "GHS ITAGA (A)",
    cluster: "HARSOOR",
    type: "HS"
  },
  {
    dise: "29041102602",
    name: "GOVT HPS ITAGA (A)",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041101201",
    name: "GOVT HPS BHUPAL TEGUNUR",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041103802",
    name: "GOVT LPS KASUNAIK TANDA KEROOR",
    cluster: "HARSOOR",
    type: "LPS"
  },
  {
    dise: "29041102307",
    name: "GOVT LPS HARASOOR TANDA",
    cluster: "HARSOOR",
    type: "LPS"
  },
  {
    dise: "29041104302",
    name: "GOVT LPS URDU MALAGATTI",
    cluster: "HARSOOR",
    type: "LPS"
  },
  {
    dise: "29041102901",
    name: "GOVT LPS KADABUR",
    cluster: "HARSOOR",
    type: "LPS"
  },
  {
    dise: "29041102303",
    name: "GOVT HPS URDU HARSOOR",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041104301",
    name: "GOVT LPS MALAGATTI",
    cluster: "HARSOOR",
    type: "LPS"
  },
  {
    dise: "29041102101",
    name: "GOVT LPS HALSULTANPUR",
    cluster: "HARSOOR",
    type: "LPS"
  },
{
    dise: "29041103801",
    name: "GOVT HPS KEROOR",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041101202",
    name: "GOVT HS BHUPAL TEGNOOR",
    cluster: "HARSOOR",
    type: "HS"
  },
  {
    dise: "29041106302",
    name: "GOVT HPS VENKATA BENUR",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041102308",
    name: "GHSHARSOOR",
    cluster: "HARSOOR",
    type: "HS"
  },
  {
    dise: "29041102301",
    name: "GOVT MPS HARSOOR",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041102804",
    name: "GOVT HS JEEVANAGI",
    cluster: "JEEVANAGI",
    type: "HS"
  },
  {
    dise: "29041100902",
    name: "GOVT LPS URDU BELUR (K",
    cluster: "JEEVANAGI",
    type: "LPS"
  },
  {
    dise: "29041102802",
    name: "GOVT HPS URDU JEEVANGI",
    cluster: "JEEVANAGI",
    type: "HPS"
  },
  {
    dise: "29041101301",
    name: "GOVT HPS BHUNYAR",
    cluster: "JEEVANAGI",
    type: "HPS"
  },
  {
    dise: "29041103416",
    name: "GOVT LPS G. GIRI TANDA SCHOOL",
    cluster: "JEEVANAGI",
    type: "LPS"
  },
 {
    dise: "29041102801",
    name: "GOVT HPS JEEVANAGI",
    cluster: "JEEVANAGI",
    type: "HPS"
  },
  {
    dise: "29041105803",
    name: "GOVT HPS TADKAL",
    cluster: "JEEVANAGI",
    type: "HPS"
  },
  {
    dise: "29041102001",
    name: "GOVT HPS GOGI",
    cluster: "JEEVANAGI",
    type: "HPS"
  },
  {
    dise: "29041100901",
    name: "GOVT HPS BELUR [K]",
    cluster: "JEEVANAGI",
    type: "HPS"
  },
  {
    dise: "29041106701",
    name: "GOVT HPS HOSA WADI",
    cluster: "KALLAHANGARGA",
    type: "HPS"
  },
  {
    dise: "29041100302",
    name: "GOVT HPS ASHTA",
    cluster: "KALLAHANGARGA",
    type: "HPS"
  },
  {
    dise: "29041104001",
    name: "GOVT HPS KUMASI",
    cluster: "KALLAHANGARGA",
    type: "HPS"
  },
  {
    dise: "29041102701",
    name: "GOVT HPS JAMAGA [B]",
    cluster: "KALLAHANGARGA",
    type: "HPS"
  },
  {
    dise: "29041101803",
    name: "GOVT HS GANAJALKHED",
    cluster: "KALLAHANGARGA",
    type: "HS"
  },
  {
    dise: "29041105702",
    name: "GHPS SYED CHINCHOLI. NEW EXTN",
    cluster: "KALLAHANGARGA",
    type: "HPS"
  },
{
    dise: "29041105703",
    name: "GOVT HPS URDU SYED CHINCHOLLI",
    cluster: "KALLAHANGARGA",
    type: "HPS"
  },
  {
    dise: "29041105701",
    name: "GOVT HPS SYED CHINCHOLI",
    cluster: "KALLAHANGARGA",
    type: "HPS"
  },
  {
    dise: "29041104003",
    name: "GOVT HS KUMASI",
    cluster: "KALLAHANGARGA",
    type: "HS"
  },
  {
    dise: "29041103101",
    name: "GOVT HPS KALLAHANGARGA",
    cluster: "KALLAHANGARGA",
    type: "HPS"
  },
  {
    dise: "29041101802",
    name: "GOVT HPS GANAJALKHED",
    cluster: "KALLAHANGARGA",
    type: "HPS"
  },
  {
    dise: "29041103103",
    name: "GOVT HS KALHANGARGA",
    cluster: "KALLAHANGARGA",
    type: "HS"
  },
  {
    dise: "29041103702",
    name: "GOVT HPS KAWANALLI TANDA",
    cluster: "KALMOOD",
    type: "HPS"
  },
  {
    dise: "29041106802",
    name: "GOVT HPS K.TANDA DINASHI",
    cluster: "KALMOOD",
    type: "HPS"
  },
  {
    dise: "29041103703",
    name: "GOVT LPS TOLUNAIK TANDA",
    cluster: "KALMOOD",
    type: "LPS"
  },
  {
    dise: "29041107001",
    name: "GOVT LPS VADGERA",
    cluster: "KALMOOD",
    type: "LPS"
  },
 {
    dise: "29041103306",
    name: "GOVT LPS LIMBU NAYAK TANDA",
    cluster: "KALMOOD",
    type: "LPS"
  },
  {
    dise: "29041103302",
    name: "GOVT HPS KALAMOOD TANDA",
    cluster: "KALMOOD",
    type: "HPS"
  },
  {
    dise: "29041106801",
    name: "GOVT HPS DINASHI",
    cluster: "KALMOOD",
    type: "HPS"
  },
  {
    dise: "29041103301",
    name: "GOVT HPS KALAMOOD",
    cluster: "KALMOOD",
    type: "HPS"
  },
  {
    dise: "29041102003",
    name: "GOVT LPS GOGI (K TANDA",
    cluster: "KALMOOD",
    type: "LPS"
  },
  {
    dise: "29041103307",
    name: "GOVT LPS MONU NAYAK TANDA",
    cluster: "KALMOOD",
    type: "LPS"
  },
  {
    dise: "29041100201",
    name: "GOVT LPS ANTAPANAL",
    cluster: "KALMOOD",
    type: "LPS"
  },
  {
    dise: "29041103701",
    name: "GOVT LPS KAWANALLI",
    cluster: "KALMOOD",
    type: "LPS"
  },
  {
    dise: "29041103309",
    name: "GOVT HS KALMOOD",
    cluster: "KALMOOD",
    type: "HS"
  },
  {
    dise: "29041103409",
    name: "GOVT GIRLS HPS KAMALAPUR",
    cluster: "KAMALAPUR",
    type: "HPS"
  },
 {
    dise: "29041103425",
    name: "GOVT HPS CHAVAN TANDA",
    cluster: "KAMALAPUR",
    type: "HPS"
  },
  {
    dise: "29041103414",
    name: "GOVT LPS AGASI TANDA SCHOOL",
    cluster: "KAMALAPUR",
    type: "LPS"
  },
  {
    dise: "29041103401",
    name: "GOVT PR.HPS KAMALAPUR",
    cluster: "KAMALAPUR",
    type: "HPS"
  },
  {
    dise: "29041103402",
    name: "GOVT HPS URDU KAMALAPUR",
    cluster: "KAMALAPUR",
    type: "HPS"
  },
  {
    dise: "29041103406",
    name: "GOVT LPS KAMALAPUR TANDA",
    cluster: "KAMALAPUR",
    type: "LPS"
  },
  {
    dise: "29041100802",
    name: "GOVT HPS BELKOTA",
    cluster: "KAMALAPUR",
    type: "HPS"
  },
  {
    dise: "29041103419",
    name: "GOVT HS KAMALAPUR",
    cluster: "KAMALAPUR",
    type: "HS"
  },
  {
    dise: "29041103418",
    name: "GOVT HS GIRLS KAMALAPUR",
    cluster: "KAMALAPUR",
    type: "HS"
  },
  {
    dise: "29041107818",
    name: "GOVT HPS GUNJ COLONY",
    cluster: "KAPNOOR",
    type: "HPS"
  },
  {
    dise: "29041107432",
    name: "GOVT LPS SIDHARUDHA COLONY",
    cluster: "KAPNOOR",
    type: "LPS"
  },
{
    dise: "29041108354",
    name: "GOVT.HIGH SCHOOL KAPANOOR TQ.KALABURAGI NORTH",
    cluster: "KAPNOOR",
    type: "HS"
  },
  {
    dise: "29041108353",
    name: "GOVT HPS KAPNOOR",
    cluster: "KAPNOOR",
    type: "HPS"
  },
  {
    dise: "29041108012",
    name: "GOVT HPS BOYS ROZA TAIN(KAN GULBARGA",
    cluster: "KHAJA COLONY",
    type: "HPS"
  },
  {
    dise: "29041108107",
    name: "GHPS RAMJINAGAR NO2",
    cluster: "KHAJA COLONY",
    type: "HPS"
  },
  {
    dise: "29041108720",
    name: "KPS GOVT MPS M B NAGAR",
    cluster: "M.B.NAGAR",
    type: "HPS"
  },
  {
    dise: "29041108801",
    name: "GOVT HPS OMNAGAR SEDAM RD",
    cluster: "M.B.NAGAR",
    type: "HPS"
  },
  {
    dise: "29040534620",
    name: "GHPS JAYANAGAR UNIVERSITY ROAD",
    cluster: "M.B.NAGAR",
    type: "HPS"
  },
  {
    dise: "29040508511",
    name: "GLPS SIDDESHWAR COLONY",
    cluster: "M.B.NAGAR",
    type: "LPS"
  },
  {
    dise: "29041108732",
    name: "KPS GOVT HS ADARSH NAGAR",
    cluster: "M.B.NAGAR",
    type: "HS"
  },
  {
    dise: "29041108208",
    name: "GOVT URDU GIRLS HPS SHAIK ROZA",
    cluster: "MADINA COLONY",
    type: "HPS"
  },
{
    dise: "29041109137",
    name: "GOVT HPS URDU NIZAMPUR",
    cluster: "MADINA COLONY",
    type: "HPS"
  },
  {
    dise: "29040533702",
    name: "GOVT MPS MSK URDU MILL GLB",
    cluster: "MADINA COLONY",
    type: "HPS"
  },
  {
    dise: "29041110101",
    name: "GOVT LPS URDU GALIB CLNY, JEELANABAD",
    cluster: "MADINA COLONY",
    type: "LPS"
  },
  {
    dise: "29041108505",
    name: "GOVT URDU LPS ASIF GUNJ",
    cluster: "MADINA COLONY",
    type: "LPS"
  },
  {
    dise: "29041108631",
    name: "GOVT URDU HPS HAFTGUMBAD GLB",
    cluster: "MADINA COLONY",
    type: "HPS"
  },
  {
    dise: "29041109138",
    name: "GLPS URDU LPS TAJ NAGAR RING ROAD",
    cluster: "MADINA COLONY",
    type: "LPS"
  },
  {
    dise: "29041110004",
    name: "GOVT LPS URDU MISBA NAGAR",
    cluster: "MADINA COLONY",
    type: "LPS"
  },
  {
    dise: "29041109139",
    name: "GOVT URDU HPS TAJ NAGAR RING ROAD",
    cluster: "MADINA COLONY",
    type: "HPS"
  },
  {
    dise: "29041109701",
    name: "GOVT HPS AYYARWADI URDU",
    cluster: "MADINA COLONY",
    type: "HPS"
  },
  {
    dise: "29041110012",
    name: "KPS GHS MADINA COLONY MSK MILL",
    cluster: "MADINA COLONY",
    type: "HS"
  },
 {
    dise: "29041110013",
    name: "KPS GHPS MADINA COLONY MSK MILL",
    cluster: "MADINA COLONY",
    type: "HPS"
  },
  {
    dise: "29041108207",
    name: "GUHS SHAIKH ROZA KALABURAGI",
    cluster: "MADINA COLONY",
    type: "HS"
  },
  {
    dise: "29041104222",
    name: "GOVT LPS URDU MAHAGAON WADI",
    cluster: "MAHAGAON",
    type: "LPS"
  },
  {
    dise: "29041104204",
    name: "GOVT HPS MAHAGAON WADI",
    cluster: "MAHAGAON",
    type: "HPS"
  },
  {
    dise: "29041104216",
    name: "GOVT LPS BELAKOTA KURI HATTI CAMP",
    cluster: "MAHAGAON",
    type: "LPS"
  },
  {
    dise: "29041102402",
    name: "GOVT LPS URDU HOLKUNDA",
    cluster: "MAHAGAON",
    type: "LPS"
  },
  {
    dise: "29041104801",
    name: "GOVT HPS NAVADAGI (B)",
    cluster: "MAHAGAON",
    type: "HPS"
  },
  {
    dise: "29041104205",
    name: "GOVT LPS WADDAR COLONY MAHAGAON",
    cluster: "MAHAGAON",
    type: "LPS"
  },
  {
    dise: "29041101501",
    name: "GOVT HPS DASTAPUR",
    cluster: "MAHAGAON",
    type: "HPS"
  },
  {
    dise: "29041104202",
    name: "GOVT HPS URDU MAHAGAON",
    cluster: "MAHAGAON",
    type: "HPS"
  },
 {
    dise: "29041104211",
    name: "GOVT LPS MAHAGAON WADI TANDA",
    cluster: "MAHAGAON",
    type: "LPS"
  },
  {
    dise: "29041102401",
    name: "GOVT HPS HOLAKUNDA",
    cluster: "MAHAGAON",
    type: "HPS"
  },
  {
    dise: "29041104201",
    name: "GOVT HPS GIRLS MAHAGAON",
    cluster: "MAHAGAON",
    type: "HPS"
  },
  {
    dise: "29041104218",
    name: "GOVT HS MAHAGAON",
    cluster: "MAHAGAON",
    type: "HS"
  },
  {
    dise: "29041104219",
    name: "GOVT HS URDU MAHAGAON",
    cluster: "MAHAGAON",
    type: "HS"
  },
  {
    dise: "29041104209",
    name: "GHS MAHAGAON CROSS",
    cluster: "MAHAGAON",
    type: "HS"
  },
  {
    dise: "29041104208",
    name: "GOVT HPS MAHAGAON CROSS",
    cluster: "MAHAGAON",
    type: "HPS"
  },
  {
    dise: "29041104701",
    name: "GOVT HPS NAGOOR",
    cluster: "NAGOOR",
    type: "HPS"
  },
  {
    dise: "29041104703",
    name: "GOVT HPS URDU NAGOOR",
    cluster: "NAGOOR",
    type: "HPS"
  },
  {
    dise: "29041106602",
    name: "GOVT LPS YAKKANCHI ASHRAYA GRAM",
    cluster: "NAGOOR",
    type: "LPS"
  },
  {
    dise: "29041104704",
    name: "GOVT LPS NAGOOR CROSS",
    cluster: "NAGOOR",
    type: "LPS"
  },
  {
    dise: "29041104702",
    name: "GOVT HPS NAGOOR TANDA",
    cluster: "NAGOOR",
    type: "HPS"
  },
  {
    dise: "29041103601",
    name: "GOVT HPS KATAHALLI",
    cluster: "NAGOOR",
    type: "HPS"
  },
  {
    dise: "29041106601",
    name: "GOVT LPS YANKANCHI",
    cluster: "NAGOOR",
    type: "LPS"
  },
  {
    dise: "29041102201",
    name: "GOVT HPS HARAKANCHI",
    cluster: "NAGOOR",
    type: "HPS"
  },
  {
    dise: "29041104705",
    name: "GOVT HS NAGOOR",
    cluster: "NAGOOR",
    type: "HS"
  },
  {
    dise: "29041105101",
    name: "GOVT HPS OKALI",
    cluster: "OKALI",
    type: "HPS"
  },
  {
    dise: "29041104902",
    name: "GOVT LPS CHATRUNAIK TANDA",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041101712",
    name: "GOVT LPS RATAN GUTTI TANDA",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041105102",
    name: "GOVT HS OKALI",
    cluster: "OKALI",
    type: "HS"
  },
{
    dise: "29041106401",
    name: "GOVT HPS VARANAL",
    cluster: "OKALI",
    type: "HPS"
  },
  {
    dise: "29041105306",
    name: "GOVT LPS SHANKAR NAYAK TANDA",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041100604",
    name: "GOVT LPS SULGUTTI TANDA",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041105301",
    name: "GOVT HPS RAJANAL",
    cluster: "OKALI",
    type: "HPS"
  },
  {
    dise: "29041100803",
    name: "GOVT LPS BELKOTA GUDDA (KERE",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041104901",
    name: "GOVT LPS NAVANIHAL",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041104903",
    name: "GOVT LPS NAWANIHAL TANDA",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041101101",
    name: "GOVT LPS BHEEMANAL",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041104217",
    name: "GOVT LPS BELAKOTA GUDDA",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041106403",
    name: "GOVT LPS EMJINAYAK TANDA",
    cluster: "OKALI",
    type: "LPS"
  },
 {
    dise: "29041101102",
    name: "GOVT LPS PANDUNAIK TANDA",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041106404",
    name: "GOVT LPS PURUNAYAK TANDA VARNAL",
    cluster: "OKALI",
    type: "LPS"
  },
  {
    dise: "29041100601",
    name: "GOVT HPS BACHANAL",
    cluster: "OKALI",
    type: "HPS"
  },
  {
    dise: "29041108015",
    name: "GUHS MOMINPUR KHAJCOLONY",
    cluster: "ROJATAIN",
    type: "HS"
  },
  {
    dise: "29041107405",
    name: "GUHPS GIRLS ROZATAIN GLB",
    cluster: "ROJATAIN",
    type: "HPS"
  },
  {
    dise: "29041108016",
    name: "GOVT MPS URDU ROZATAIN (KHAJA COLONY",
    cluster: "ROJATAIN",
    type: "HPS"
  },
  {
    dise: "29041109501",
    name: "GOVT HS URDU PACHAPUR ROZT",
    cluster: "ROJATAIN",
    type: "HS"
  },
  {
    dise: "29041109604",
    name: "GUHPS NAYA MOHALLA GULBARGA N",
    cluster: "ROJATAIN",
    type: "HPS"
  },
  {
    dise: "29041107513",
    name: "GOVT HPS CHAKRAKATTA",
    cluster: "SHAHABAZAR",
    type: "HPS"
  },
  {
    dise: "29041108310",
    name: "GOVT LPS HERA NAGAR",
    cluster: "SHAHABAZAR",
    type: "LPS"
  },
{
    dise: "29041107512",
    name: "GOVT LPS ASHARAY COLONY A. NAGAR",
    cluster: "SHAHABAZAR",
    type: "LPS"
  },
  {
    dise: "29041108303",
    name: "GOVT LPS SHAHABAZAR TANDA",
    cluster: "SHAHABAZAR",
    type: "LPS"
  },
  {
    dise: "29041107803",
    name: "GOVT MPS VIJAYANAGAR COLONY",
    cluster: "SHAHABAZAR",
    type: "HPS"
  },
  {
    dise: "29041108314",
    name: "GHS VIJAYANAGAR COLONY",
    cluster: "SHAHABAZAR",
    type: "HS"
  },
  {
    dise: "29041108552",
    name: "GOVT LPS PATAWAD TANDA",
    cluster: "SONTH",
    type: "LPS"
  },
  {
    dise: "29041103903",
    name: "GOVT LPS SONAR TANDA",
    cluster: "SONTH",
    type: "LPS"
  },
  {
    dise: "29041101713",
    name: "GOVT LPS KEVALU TANDA",
    cluster: "SONTH",
    type: "LPS"
  },
  {
    dise: "29041104604",
    name: "GOVT LPS MARAMANCHI",
    cluster: "SONTH",
    type: "LPS"
  },
  {
    dise: "29041102501",
    name: "GOVT LPS HONNALLI",
    cluster: "SONTH",
    type: "LPS"
  },
  {
    dise: "29041105611",
    name: "GOVT LPS JOTONAYAK TANDA",
    cluster: "SONTH",
    type: "LPS"
  },
 {
    dise: "29041104503",
    name: "GOVT LPS MARAGUTTI TANDA",
    cluster: "SONTH",
    type: "LPS"
  },
  {
    dise: "29041104603",
    name: "GOVT HPS MARAMANCHI TANDA",
    cluster: "SONTH",
    type: "HPS"
  },
  {
    dise: "29041105609",
    name: "GOVT LPS PURUNAIK TANDA",
    cluster: "SONTH",
    type: "LPS"
  },
  {
    dise: "29041105619",
    name: "GOVT HPS HARJI TANDA [SONTH]",
    cluster: "SONTH",
    type: "HPS"
  },
  {
    dise: "29041103901",
    name: "GOVT HPS KINNI SARFOS",
    cluster: "SONTH",
    type: "HPS"
  },
  {
    dise: "29041103902",
    name: "GOVT LPS KINNI SARFOS TANDA",
    cluster: "SONTH",
    type: "LPS"
  },
  {
    dise: "29041105607",
    name: "GHPS URDU SONTH",
    cluster: "SONTH",
    type: "HPS"
  },
  {
    dise: "29041105618",
    name: "GOVT MPS SONTH",
    cluster: "SONTH",
    type: "HPS"
  },
  {
    dise: "29041105615",
    name: "GOVT HS SONTH URDU",
    cluster: "SONTH",
    type: "HS"
  },
  {
    dise: "29041105203",
    name: "GOVT HPS PATAWADA",
    cluster: "SONTH",
    type: "HPS"
  },
{
    dise: "29041104401",
    name: "GOVT LPS MALASAPUR",
    cluster: "SONTH",
    type: "LPS"
  },
  {
    dise: "29041104501",
    name: "GOVT HPS MARAGUTTI",
    cluster: "SONTH",
    type: "HPS"
  },
  {
    dise: "29041105616",
    name: "GOVT HIGH SCHOOL SONTH",
    cluster: "SONTH",
    type: "HS"
  },
  {
    dise: "29041104506",
    name: "GOVT HIGH SCHOOL MARGUTTI",
    cluster: "SONTH",
    type: "HS"
  },
  {
    dise: "29041105901",
    name: "GOVT HPS TAJ SULTANPUR",
    cluster: "TAJSULTANPUR",
    type: "HPS"
  },
  {
    dise: "29041105903",
    name: "GOVT LPS (URDU TAJSULTANPUR",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041105907",
    name: "GOVT LPS HAMALARA COLONY",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041107707",
    name: "GOVT HPS SANJEEVANAGAR",
    cluster: "TAJSULTANPUR",
    type: "HPS"
  },
  {
    dise: "29041105917",
    name: "GOVT LPS KAGIKARKHANI",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041105905",
    name: "GOVT. HPS KSRP COL. TAJSULTANPUR",
    cluster: "TAJSULTANPUR",
    type: "HPS"
  },
  {
    dise: "29041105918",
    name: "GOVT LPS KAMALANAGAR",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041105912",
    name: "GHS KSRP COLONY TAJSULTANPUR",
    cluster: "TAJSULTANPUR",
    type: "HS"
  }
];
