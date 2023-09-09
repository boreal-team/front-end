import './styles.css';

interface ButtonProps {
	onChange: any;
	text: string;
}

const ButtonComponent = ({ onChange, text }: ButtonProps) => {
	return (
		<div onClick={onChange} className='button-base'>
			{text}
		</div>
	);
};

export default ButtonComponent;
