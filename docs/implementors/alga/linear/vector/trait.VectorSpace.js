(function() {var implementors = {};
implementors["nalgebra"] = ["impl&lt;N, R:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, C:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, S&gt; <a class=\"trait\" href=\"alga/linear/vector/trait.VectorSpace.html\" title=\"trait alga::linear::vector::VectorSpace\">VectorSpace</a> for <a class=\"struct\" href=\"nalgebra/core/struct.Matrix.html\" title=\"struct nalgebra::core::Matrix\">Matrix</a>&lt;N, R, C, S&gt; <span class=\"where fmt-newline\">where N: <a class=\"trait\" href=\"nalgebra/core/trait.Scalar.html\" title=\"trait nalgebra::core::Scalar\">Scalar</a> + <a class=\"trait\" href=\"alga/general/specialized/trait.Field.html\" title=\"trait alga::general::specialized::Field\">Field</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, R, C&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"trait\" href=\"nalgebra/core/storage/trait.Storage.html\" title=\"trait nalgebra::core::storage::Storage\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, R, C, S&gt;</span>","impl&lt;N, S&gt; <a class=\"trait\" href=\"alga/linear/vector/trait.VectorSpace.html\" title=\"trait alga::linear::vector::VectorSpace\">VectorSpace</a> for <a class=\"struct\" href=\"nalgebra/geometry/struct.QuaternionBase.html\" title=\"struct nalgebra::geometry::QuaternionBase\">QuaternionBase</a>&lt;N, S&gt; <span class=\"where fmt-newline\">where N: <a class=\"trait\" href=\"alga/general/real/trait.Real.html\" title=\"trait alga::general::real::Real\">Real</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"trait\" href=\"nalgebra/core/storage/trait.Storage.html\" title=\"trait nalgebra::core::storage::Storage\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>, S&gt;</span>",];
implementors["ncollide"] = ["impl&lt;N, R, C, S&gt; <a class=\"trait\" href=\"alga/linear/vector/trait.VectorSpace.html\" title=\"trait alga::linear::vector::VectorSpace\">VectorSpace</a> for <a class=\"struct\" href=\"nalgebra/core/matrix/struct.Matrix.html\" title=\"struct nalgebra::core::matrix::Matrix\">Matrix</a>&lt;N, R, C, S&gt; <span class=\"where fmt-newline\">where C: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/core/scalar/trait.Scalar.html\" title=\"trait nalgebra::core::scalar::Scalar\">Scalar</a> + <a class=\"trait\" href=\"alga/general/specialized/trait.Field.html\" title=\"trait alga::general::specialized::Field\">Field</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, R, C&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"trait\" href=\"nalgebra/core/storage/trait.Storage.html\" title=\"trait nalgebra::core::storage::Storage\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, R, C, S&gt;</span>","impl&lt;N, S&gt; <a class=\"trait\" href=\"alga/linear/vector/trait.VectorSpace.html\" title=\"trait alga::linear::vector::VectorSpace\">VectorSpace</a> for <a class=\"struct\" href=\"nalgebra/geometry/quaternion/struct.QuaternionBase.html\" title=\"struct nalgebra::geometry::quaternion::QuaternionBase\">QuaternionBase</a>&lt;N, S&gt; <span class=\"where fmt-newline\">where N: <a class=\"trait\" href=\"alga/general/real/trait.Real.html\" title=\"trait alga::general::real::Real\">Real</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"trait\" href=\"nalgebra/core/storage/trait.Storage.html\" title=\"trait nalgebra::core::storage::Storage\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>, S&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
