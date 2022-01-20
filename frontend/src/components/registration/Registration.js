import { useState } from "react";

const Register = () => {
    const [name, setName] = useState('');
    const [batchInfo, setBatchInfo] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, batchInfo, password, confPassword };
    
        fetch('http://localhost:8000/user/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        }).then(() => {
          console.log('new User Registerd');
          console.log(user);
        })
      }
    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="signup-form">
                            <form onSubmit={handleSubmit} className="mt-5 border p-4 bg-light shadow">
                                <h4 className="mb-5 text-secondary">Create Your Account</h4>
                                <div className="row">
                                    <div className="mb-3 col-md-12">
                                        <label>Name<span className="text-danger">*</span></label>
                                        <input required type="text" name="name" onChange={(e) => setName(e.target.value)}
                                            value={name} className="form-control" placeholder="Enter your Name" />
                                    </div>

                                    <div className="mb-3 col-md-12">
                                        <label>Batch info<span className="text-danger">*</span></label>
                                        <input required type="text" name="batch-info" onChange={(e) => setBatchInfo(e.target.value)}
                                            value={batchInfo} className="form-control" placeholder="Sample: BSE-27B" />
                                    </div>

                                    <div className="mb-3 col-md-12">
                                        <label>Password<span className="text-danger">*</span></label>
                                        <input required type="password" name="password" onChange={(e) => setPassword(e.target.value)}
                                            value={password} className="form-control" placeholder="Enter Password" />
                                    </div>

                                    <div className="mb-3 col-md-12">
                                        <label>Confirm Password<span className="text-danger">*</span></label>
                                        <input required type="password" name="confirm-password" onChange={(e) => setConfPassword(e.target.value)}
                                            value={confPassword} className="form-control" placeholder="Confirm Password" />
                                    </div>

                                    <div className="col-md-12">
                                        <button className="btn btn-primary float-end">Signup Now</button>
                                    </div>
                                </div>
                            </form>
                            <p className="text-center mt-3 text-secondary">If you have account, Please <a href="#">Login Now</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;