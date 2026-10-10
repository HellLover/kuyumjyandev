import React from 'react';
import sugar from 'sugar';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="border-t border-zinc-800/70">
            <div className="mx-auto flex max-w-4xl flex-col gap-1 px-6 py-8 font-mono text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                <p>&copy; {new Date().getFullYear()} Samvel Kuyumjyan</p>
                <p>Last built at {sugar.Date.format(new Date(__BUILD_TIME__))}</p>
            </div>
        </footer>
    );
};

export default Footer;
