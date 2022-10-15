interface CompProps {
    title: string;
}

export default function Comp(props: CompProps) {
    const { title } = props
    return <h5>{title}</h5>
} 