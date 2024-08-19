import { StaticImageData } from 'next/image'; // Import StaticImageData
import { ReactElement } from 'react';

interface MegaMenuItem {
  id: number;
  name: string;
  path: string;
  desc: string;
  img?: string | StaticImageData; // Accept both string and StaticImageData
}

interface MegaMenuContentItem {
  id: number;
  menus: MegaMenuItem[];
}

interface DropdownContentItem {
  id: number;
  name: string;
  path: string;
}

interface MenuListItem {
  id: number;
  name: string;
  path: string;
  isDropdown: boolean;
  isMegaMenu: boolean;
  megaMenuContent: MegaMenuContentItem[];
  dropdownContent: DropdownContentItem[];
}

// Define the props for the MegaMenuTwo component
interface MegaMenuProps {
  dropDownList: MegaMenuContentItem[];
  parentId?: number;
}

// Define the props for the DropDownMenu component
interface DropDownMenuProps {
  dropDownList: DropdownContentItem[];
  bgColor: string;
  parentId: number;
}

type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

interface MapDirectionProviderProps {
  children: ReactNode;
}

interface MapContextType {
  mapDirection: [number, number];
  setMapDirection: React.Dispatch<React.SetStateAction<[number, number]>>;
}

type PrimaryLinkProps = {
  variant?: (typeof PrimaryLinkVariant)[number];
} & UnstyledLinkProps;

// Define the props for the Offcanvas component
interface OffcanvasProps {
  setOffcanvaseActive: (active: boolean) => void;
  offcanvaseActive: boolean;
  bg_muted?: string; // Make this optional if it might not always be provided
}

interface LayoutChildrenProps {
  children: React.ReactNode;
}

// Define the type for a product
interface Product {
  quantity: number; // Adjust based on the actual properties of your product
  // Add other properties if needed
}

// Define the prop types
interface SectionSidebarImgProps {
  img: string | StaticImageData; // 'img' can be a URL string or a StaticImageData object
  section_name: string;
  className?: string; // 'className' is optional
}

// Define the prop types
interface ButtonOutlineProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

// Define the prop types
interface SectionTitleProps {
  sectionName: string;
  sectionTitle: string;
  sectionDesc: string;
  text_muted?: string;
  bg_muted?: string;
  link?: string;
  button_text?: string;
}

interface ServiceCardProps {
  id: string;
  service_name: string;
  service_desc: string;
  text_muted?: string;
  link: string;
}

interface CardDetailsProps {
  order: string;
  position: string;
  card_desc: ReactElement;
  card_img: string | StaticImageData; // 'img' can be a URL string or a StaticImageData object
}
