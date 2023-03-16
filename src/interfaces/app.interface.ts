import { CSSProperties, ReactNode } from "react";
import { BarElement, LineElement } from "chart.js";

export interface ObjectKeyDynamicI {
  [key: string]: any;
}

export interface Announcement {
  id: number;
  link: string;
  title: string;
  content: string;
  date: string;
}

export interface SocketData {
  symbol?: string;
  id?: number;
  side?: string;
  size?: number;
  price?: number;
  timestamp?: string;
}
export interface SocketI {
  table?: string;
  action?: string;
  data?: Array<SocketData>;
}

export interface TableButtonPaginationPropsI {
  label: string | Function;
  totalPagination: number;
  offset: number;
  callback: Function;
  isBack?: boolean;
  total?: number;
}

export interface TablePropsI {
  stylesCustom?: StylesCustomTablePropsI;
  keyName: string;
  timeDelayScrollAnimation?: number;
  Empty?: Function;
  limit?: number;
  pagination?: PaginationTablePropsI;
  data?: Array<unknown>;
  header: HeaderTablePropsI;
  timeout?: boolean;
  handleReload?: Function;
  tableVersion?: "bold" | "light";
  footerRender?: ReactNode | Function;
  headerRender?: ReactNode | Function;
  hasSelectPagination?: boolean;
  handleAction?: Function;
}

export interface HeaderTablePropsI {
  columns: Array<TableColumnsPropsI>;
  textDecorator?: string;
}

export interface StylesCustomTablePropsI {
  tr?: string;
  th?: string;
  td?: string;
  table?: string;
  container?: string;
  footerContainer?: string;
  containerOverflow?: string;
  paginationContainer?: string;
}

export interface PaginationTablePropsI {
  limit: number;
  total?: number;
  change?: TablePaginationOnChangeI;
  offset?: number;
}

export interface TablePaginationOnChangeI {
  (index: number): void;
}

export interface TableColumnsPropsI {
  title: string | Function;
  key?: string;
  type?: string;
  formatDate?: boolean;
  position?: string;
  render?: RenderSimpleTableColumnsPropsI | Function;
}

export interface RenderSimpleTableColumnsPropsI {
  (params: ParamsRenderSimpleTableColumnsPropsI): ReactNode;
}

export interface ParamsRenderSimpleTableColumnsPropsI {
  data?: unknown | Array<unknown>;
  indexData?: number;
  isHover?: boolean;
  indexColumn?: number;
}

export interface TableButtonPaginationPropsI {
  label: string | Function;
  totalPagination: number;
  offset: number;
  callback: Function;
  isBack?: boolean;
  total?: number;
}

export interface UsersColumnsTablePropsI {
  offset?: number;
  handleAction?: (type: string, data: any) => void;
  children: ({ columns }: { columns: Array<TableColumnsPropsI> }) => any;
}

export interface TablePaginationPropsI {
  offset?: number;
  total: number;
  limitData: number;
  limit: number;
  keyName: string;
  hasSelectPagination?: boolean;
  loadedData?: boolean;
  callback?: TablePaginationOnChangeI;
}

export interface DashChartPropsI {
  customOptions?: any;
  customStyle?: CSSProperties;
  data: {
    labels: string[];
    datasets: any[];
  };
}

export interface DataSetsI {
  label: string;
  color: string;
  backgroundColor: string;
  data: [];
}

export interface ChartJSTooltipContextI {
  chart: any;
  dataIndex: number;
  parsed: ParsedI;
  row: number;
  label: string;
  dataset: any;
  element: BarElement | LineElement;
  formattedValue: string;
}

export interface ParsedI {
  x: number;
  y: number;
  _stacks: Stacks;
}

interface Stacks {
  y: Y;
}

interface Y {
  "0": number;
  _top: number;
  _bottom?: any;
}

export interface SocketOptionsI {
  host: string;
  hostname: string;
  secure: boolean;
  port: string | number;
  query: {
    [key: string]: any;
  };
  agent: string | boolean;
  upgrade: boolean;
  forceBase64: boolean;
  timestampParam: string;
  timestampRequests: boolean;
  transports: string[];
  policyPost: number;
  rememberUpgrade: boolean;
  onlyBinaryUpgrades: boolean;
  requestTimeout: number;
  transportOptions: Object;
  pfx: string;
  key: string;
  passphrase: string;
  cert: string;
  ca: string | string[];
  ciphers: string;
  rejectUnauthorized: boolean;
  extraHeaders?: {
    [header: string]: string;
  };
  withCredentials: boolean;
  closeOnBeforeunload: boolean;
  useNativeTimers: boolean;
  autoUnref: boolean;
  perMessageDeflate: {
    threshold: number;
  };
  path: string;
  protocols: string | string[];
}

export interface IDateRangeQuery {
  start?: string | Date;
  end?: string | Date;
}
export interface FindBitMexApiQuery {
  search?: string;
  dateRange?: IDateRangeQuery;
}

export interface DateRangeI {
  $D?: number;
  $H?: number;
  $L?: string;
  $M?: number;
  $W?: number;
  $d?: string | Date |{};
  $m?: number;
  $ms?: number;
  $s?: number;
  $u?: undefined;
  $x?: {};
  $y?: number;
}
