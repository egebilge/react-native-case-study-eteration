import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  productTitle: {fontSize: '20@s', fontWeight: 'bold', marginBottom: '10@s'},
  productImage: {
    objectFit: 'cover',
    height: '200@s',
    width: '100%',
    marginBottom: '20@s',
    borderRadius: '10@s',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '10@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  bottomButton: {
    width: '50%',
    backgroundColor: '#2A59FE',
    borderRadius: '5@s',
  },
});

export {styles};
