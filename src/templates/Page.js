import Typography from '@material-ui/core/Typography'

const Page = ({ title, Component}) => {
  return(
    <>
      <Typography variant='h3' align='center'>  
        {title}  
      </Typography> 
      
      <Component />
    </>
  )
}

export default Page