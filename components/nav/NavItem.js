export default function NavItem({link, text}){
    return (
        <a className="hover:text-custom-orange font-semibold" href={link}>
            <div>{text}</div>
        </a>
    );
}