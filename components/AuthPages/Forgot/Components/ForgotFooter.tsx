import Button from '@/components/common/Form/Button/Button';
import Link from 'next/link';

const ForgotFooter = () => {
  return (
    <div>
      <Button children="Send email" type="submit" />
      <Link href="/login" passHref>
        <a className="text-center block text-sm mt-2 cursor-pointer">Back</a>
      </Link>
    </div>
  );
};

export default ForgotFooter;
