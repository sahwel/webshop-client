import Link from 'next/link';
import Button from '../../common/Form/Button/Button';

const LoginFooter = () => {
  return (
    <div>
      <Button children="Sign in" type="submit" />
      <Link href="/register" passHref>
        <a className="text-center mt-2 cursor-pointer block">
          Don’t have an account? <span className="font-bold">Register</span>
        </a>
      </Link>
    </div>
  );
};

export default LoginFooter;
