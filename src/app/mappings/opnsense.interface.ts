export interface opnRoot {
  opnsense?: Opnsense;
}

export interface Opnsense {
  version?: number;
  'config-apply'?: Configapply;
  system?: System;
  interfaces?: Interfaces;
  firewall?: Firewall;
  dhcpd?: Dhcpd;
  dhcpdv6?: DhcpdV6;
  nat?: any;
  filter?: any;
  aliases?: any;
}

export interface Firewall {
  rules?: Rule[];
}

export interface Rule {
  uuid?: string;
  type?: string;
  enabled?: number;
  interface?: string;
  descr?: string;
  protocol?: string;
  source?: Source;
  destination?: Destination;
  [x: string]: any;
}

export interface Destination {
  address?: string;
  port?: number | string;
}

export interface Source {
  any?: number | string | undefined;
}

export interface Dhcpd {
  dhcpd?: Lan2[];
}
export interface DhcpdV6 {
  dhcpdV6?: Lan2[];
}
export interface Interfaces {
  lan?: NetworkController[];
  wan?: NetworkController[];
  opt?: NetworkController[]
}

export interface NetworkController {
  enable?: string | number;
  if?: string;
  descr?: string;
  'alias-address'?: string;
  'alias-subnet'?: number;
  spoofmac?: string;
  ipaddr?: string;
  subnet?: number;
  gateway?: string;
  ipaddrv6?: string;
  subnetv6?: string;
  gatewayv6?: string;
  dhcphostname?: string;
  dhcprejectfrom?: string;
  adv_dhcp_pt_timeout?: string;
  adv_dhcp_pt_retry?: string;
  adv_dhcp_pt_select_timeout?: string;
  adv_dhcp_pt_reboot?: string;
  adv_dhcp_pt_backoff_cutoff?: string;
  adv_dhcp_pt_initial_interval?: string;
  adv_dhcp_pt_values?: string;
  adv_dhcp_send_options?: string;
  adv_dhcp_request_options?: string;
  adv_dhcp_required_options?: string;
  adv_dhcp_option_modifiers?: string;
  adv_dhcp_config_advanced?: string;
  adv_dhcp_config_file_override?: string;
  adv_dhcp_config_file_override_path?: string;
  [x: string]: any;
}

export interface Lan2 {
  range?: Range;
  defaultleasetime?: string;
  maxleasetime?: string;
  netmask?: string;
  failover_peerip?: string;
  domain?: string;
  domainsearchlist?: string;
  ddnsdomain?: string;
  tftp?: string;
  ldap?: string;
  filename?: string;
  rootpath?: string;
  numberoptions?: string;
  netboot?: string;
  winsserver?: string;
  dnsserver?: string[];
  nextserver?: string;
  staticmap?: Staticmap;
}

export interface Range {
  from?: string;
  to?: string;
}

export interface Staticmap {
  mac?: string;
  cid?: string;
  ipaddr?: string;
  hostname?: string;
  descr?: string;
  filename?: string;
  rootpath?: string;
  defaultleasetime?: string;
  maxleasetime?: string;
  gateway?: string;
  domain?: string;
  domainsearchlist?: string;
  ddnsdomain?: string;
  ddnsdomainprimary?: string;
  ddnsdomainkeyname?: string;
  ddnsdomainkey?: string;
  tftp?: string;
  ldap?: string;
}

export interface System {
  hostname?: string;
  domain?: string;
  timezone?: string;
  language?: string;
}

export interface Configapply {
  uuid?: string;
}