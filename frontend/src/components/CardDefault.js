import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function CardDefault() {
    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-60">
                <img
                    src="/images/nebula.jpg"
                    alt="card-image"
                    className="h-160 w-200"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="ml-5 mf-5 mt-5 mb-2">
                    Nébula
                </Typography>
                <Typography className="ml-5 mf-5 mb-5">
                    Uma organização sem fins lucrativos comprometida em criar um espaço de tecnologia Web3 mais inclusivo e acessível.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="text" className="flex items-center gap-2 ml-5 mf-5 mb-5">
                    Read More{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default CardDefault;