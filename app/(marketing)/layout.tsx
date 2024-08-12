import Navbar from "./_components/navbar";

/**
 * MarketingLayout component provides a layout structure for marketing pages, including a navbar and main content area.
 * This layout wraps its children with a navbar at the top and a main content area below, with appropriate padding and background color for dark mode.
 * @component
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered MarketingLayout component.
 */
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
            <Navbar />
            <main className="h-full pt-40">{ children }</main>
        </div>
    );
}

export default MarketingLayout;