import Link from 'next/link';
import Button from '../../common/Form/Button/Button';

const LoginFooter = () => {
  return (
    <div>
      <Button children="Sign in" type="submit" />
      <Link href="/register">
        <p className="text-center mt-2 cursor-pointer">
          Don’t have an account? <span className="font-bold">Register</span>
        </p>
      </Link>
    </div>
  );
};

export default LoginFooter;
